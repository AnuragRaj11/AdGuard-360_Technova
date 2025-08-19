import { useEffect, useRef } from 'react'
import L from 'leaflet'

export default function Map({ reports = [], height = 420 }) {
  const mapRef = useRef(null)

  useEffect(() => {
    if (mapRef.current) return
    const map = L.map('map', { zoomControl: true }).setView([20.5937, 78.9629], 5)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap'
    }).addTo(map)
    mapRef.current = map
  }, [])

  useEffect(() => {
    const map = mapRef.current
    if (!map) return
    if (!map._markerLayer) {
      map._markerLayer = L.layerGroup().addTo(map)
    }
    map._markerLayer.clearLayers()
    reports.forEach(r => {
      if (r.latitude && r.longitude) {
        const v = r.violations || {}
        const popup = `
          <strong>Report #${r.id}</strong><br/>
          ${r.latitude?.toFixed?.(4)}, ${r.longitude?.toFixed?.(4)}<br/>
          <em>Size:</em> ${v.size} | <em>Placement:</em> ${v.placement}<br/>
          <em>Content:</em> ${v.content} | <em>Structural:</em> ${v.structural}<br/>
          <a href="${r.image_url}" target="_blank">View image</a>
        `
        L.marker([r.latitude, r.longitude]).addTo(map._markerLayer).bindPopup(popup)
      }
    })
  }, [reports])

  return <div id="map" style={{ width: '100%', height, borderRadius: 12, border: '1px solid #e5e7eb' }} />
}
