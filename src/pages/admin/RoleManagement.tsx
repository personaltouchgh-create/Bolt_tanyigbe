import { useEffect, useState } from 'react';
import { Users, Shield, XCircle, CheckCircle, Trash2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../contexts/AuthContext';
import { usePermissions } from '../../hooks/usePermissions';

interface Role {
  id: string;
  name: string;
  description: string;
  permissions: Record<string, boolean>;
}

interface User {
  id: string;
  email: string;
}

interface UserRole {
  user_id: string;
  role_id: string;
  user_email?: string;
  role_name?: string;
}

export default function RoleManagement() {
  const [roles, setRoles] = useState<Role[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [userRoles, setUserRoles] = useState<UserRole[]>([]);
  const [selectedUser, setSelectedUser] = useState<string>('');
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { isSuperAdmin, loading: permissionsLoading } = usePermissions();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const [rolesResult, usersResult, userRolesResult] = await Promise.all([
      supabase.from('roles').select('*').order('name'),
      supabase.rpc('get_admin_users'),
      supabase.from('user_roles').select(`
        user_id,
        role_id,
        roles (
          name
        )
      `),
    ]);

    if (rolesResult.data) setRoles(rolesResult.data);
    if (usersResult.data) setUsers(usersResult.data);
    if (userRolesResult.data) {
      const formattedUserRoles = userRolesResult.data.map((ur: any) => ({
        user_id: ur.user_id,
        role_id: ur.role_id,
        role_name: ur.roles?.name,
      }));
      setUserRoles(formattedUserRoles);
    }

    setLoading(false);
  };

  const assignRole = async () => {
    if (!selectedUser || !selectedRole) {
      alert('Please select both a user and a role');
      return;
    }

    const existing = userRoles.find(
      (ur) => ur.user_id === selectedUser && ur.role_id === selectedRole
    );

    if (existing) {
      alert('This user already has this role');
      return;
    }

    const { error } = await supabase.from('user_roles').insert({
      user_id: selectedUser,
      role_id: selectedRole,
      assigned_by: user?.id,
    });

    if (error) {
      alert('Error assigning role: ' + error.message);
    } else {
      setSelectedUser('');
      setSelectedRole('');
      fetchData();
    }
  };

  const removeRole = async (userId: string, roleId: string) => {
    if (!confirm('Are you sure you want to remove this role?')) return;

    const { error } = await supabase
      .from('user_roles')
      .delete()
      .eq('user_id', userId)
      .eq('role_id', roleId);

    if (error) {
      alert('Error removing role: ' + error.message);
    } else {
      fetchData();
    }
  };

  const getUserRoles = (userId: string) => {
    return userRoles.filter((ur) => ur.user_id === userId);
  };

  const getPermissionsList = (permissions: Record<string, boolean>) => {
    return Object.entries(permissions)
      .filter(([_, value]) => value)
      .map(([key, _]) => key.replace('can_', '').replace(/_/g, ' '));
  };

  if (loading || permissionsLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!isSuperAdmin) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
          <p className="text-gray-600">
            Only super administrators can manage roles and permissions.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Role Management</h1>
        <p className="text-gray-600">Assign roles and manage user permissions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Shield className="w-5 h-5 mr-2 text-blue-600" />
            Assign Role to User
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select User
              </label>
              <select
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                <option value="">Choose a user...</option>
                {users.map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.email}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Role
              </label>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                <option value="">Choose a role...</option>
                {roles.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.name} - {role.description}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={assignRole}
              className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Assign Role
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Available Roles</h2>
          <div className="space-y-3">
            {roles.map((role) => (
              <div key={role.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{role.name}</h3>
                    <p className="text-sm text-gray-600">{role.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {getPermissionsList(role.permissions).map((perm) => (
                    <span
                      key={perm}
                      className="inline-flex items-center px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded"
                    >
                      {perm}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 flex items-center">
            <Users className="w-5 h-5 mr-2 text-blue-600" />
            User Role Assignments
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Roles
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((u) => {
                const uRoles = getUserRoles(u.id);
                return (
                  <tr key={u.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <p className="font-medium text-gray-900">{u.email}</p>
                    </td>
                    <td className="px-6 py-4">
                      {uRoles.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {uRoles.map((ur) => (
                            <span
                              key={ur.role_id}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                            >
                              {ur.role_name}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-sm text-gray-500">No roles assigned</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      {uRoles.map((ur) => (
                        <button
                          key={ur.role_id}
                          onClick={() => removeRole(u.id, ur.role_id)}
                          className="text-red-600 hover:text-red-800 ml-2"
                          title={`Remove ${ur.role_name} role`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      ))}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
