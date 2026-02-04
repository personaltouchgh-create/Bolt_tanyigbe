import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

interface Role {
  id: string;
  name: string;
  permissions: Record<string, boolean>;
}

interface UserPermissions {
  roles: Role[];
  permissions: Set<string>;
  hasPermission: (permission: string) => boolean;
  isSuperAdmin: boolean;
  loading: boolean;
}

export function usePermissions(): UserPermissions {
  const { user } = useAuth();
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setRoles([]);
      setLoading(false);
      return;
    }

    fetchUserRoles();
  }, [user]);

  const fetchUserRoles = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from('user_roles')
      .select(`
        role_id,
        roles (
          id,
          name,
          permissions
        )
      `)
      .eq('user_id', user.id);

    if (!error && data) {
      const userRoles = data.map((ur: any) => ur.roles).filter(Boolean);
      setRoles(userRoles);
    }

    setLoading(false);
  };

  const permissions = new Set<string>();
  roles.forEach((role) => {
    Object.entries(role.permissions).forEach(([key, value]) => {
      if (value) {
        permissions.add(key);
      }
    });
  });

  const hasPermission = (permission: string): boolean => {
    return permissions.has(permission);
  };

  const isSuperAdmin = roles.some((role) => role.name === 'super_admin');

  return {
    roles,
    permissions,
    hasPermission,
    isSuperAdmin,
    loading,
  };
}
