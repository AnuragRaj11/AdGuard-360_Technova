import { useEffect, useState } from 'react'
import { createReport } from '../lib/api'


export default function UploadForm() {
  const [file, setFile] = useState(null)
  const [address, setAddress] = useState('')
  const [coords, setCoords] = useState({ latitude: null, longitude: null })
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setCoords({ latitude: pos.coords.latitude, longitude: pos.coords.longitude }),
        () => {}, { enableHighAccuracy: true, timeout: 10000 }
      )
    }
  }, [])

  async function onSubmit(e) {
    e.preventDefault()
    setLoading(true); setError(null); setResult(null)
    try {
      if (!file) throw new Error('Please select an image')
      const resp = await createReport({ file, latitude: coords.latitude, longitude: coords.longitude, address })
      setResult(resp)
    } catch (err) {
      setError(String(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="card space-y-4">
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Billboard Photo *</label>
          <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} required />
          <p className="text-xs text-gray-500 mt-1">Ensure no faces/plates are in focus. By submitting, you consent to civic reporting.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div>
            <label className="block text-sm font-medium mb-1">Latitude</label>
            <input className="w-full border rounded px-3 py-2" value={coords.latitude ?? ''} onChange={e => setCoords(c => ({...c, latitude: e.target.value}))} placeholder="auto" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Longitude</label>
            <input className="w-full border rounded px-3 py-2" value={coords.longitude ?? ''} onChange={e => setCoords(c => ({...c, longitude: e.target.value}))} placeholder="auto" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Address (optional)</label>
            <input className="w-full border rounded px-3 py-2" value={address} onChange={e => setAddress(e.target.value)} placeholder="Nearby landmark" />
          </div>
        </div>
        <button className="btn btn-primary" type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit Report'}</button>
      </form>

      {error && <div className="text-red-600 text-sm">{error}</div>}

      {result && (
        <div className="border rounded-lg p-3 bg-gray-50">
          <h3 className="font-semibold mb-2">AI Analysis</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {Object.entries(result.violations || {}).map(([k, v]) => (
              <div key={k} className={"px-3 py-2 rounded " + (v ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700")}>
                {k}: {String(v)}
              </div>
            ))}
          </div>
          <div className="text-xs text-gray-600 mt-2">
            This is a preliminary check. Authorities will verify compliance with local bylaws.
          </div>
        </div>
      )}
    </div>
  )
}
