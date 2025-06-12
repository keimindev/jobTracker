import { supabase } from '../../lib/supabase'

export async function addCompany(data: {
  name: string;
  position: string;
  applied_date: string;
  status: string;
  note?: string;
  link?: string;
  user_id: string;
}) {
  const { error } = await supabase.from('applied_companies').insert([data]);

  if (error) {
    throw new Error(error.message);
  }
}
