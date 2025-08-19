export const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

export const fetcher = (url) => fetch(url).then(r => {
  if(!r.ok) throw new Error('Network error');
  return r.json();
});

export async function createReport({ file, latitude, longitude, address }) {
  const form = new FormData();
  form.append('file', file);
  if (latitude != null) form.append('latitude', String(latitude));
  if (longitude != null) form.append('longitude', String(longitude));
  if (address) form.append('address', address);

  const res = await fetch(`${API_BASE}/reports`, { method: 'POST', body: form });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function listReports() {
  const res = await fetch(`${API_BASE}/reports`);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
