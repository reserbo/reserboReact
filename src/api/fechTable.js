import { supabase } from '../supabaseClient'

export async function fetchTable(tableName, {
  columns = '*',
  limit = null,
  order = null,
  filters = [],
} = {}) {
  let query = supabase.from(tableName).select(columns)

  if (order) {
    query = query.order(order.column, { ascending: order.ascending })
  }

  if (limit !== null) {
    query = query.limit(limit)
  }

  for (const { column, operator, value } of filters) {
    query = query[operator](column, value)
  }

  const { data, error } = await query

  if (error) {
    console.error(`Error fetching ${tableName}:`, error.message)
    throw new Error(error.message)
  }

  return data
}
