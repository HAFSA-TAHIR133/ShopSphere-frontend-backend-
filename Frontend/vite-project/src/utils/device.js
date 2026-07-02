// utils/device.js
export function getDeviceName() {
  const ua = navigator.userAgent;
  
  if (ua.includes('Chrome') && !ua.includes('Edg')) return 'Chrome on ' + getOS(ua);
  if (ua.includes('Firefox')) return 'Firefox on ' + getOS(ua);
  if (ua.includes('Safari') && !ua.includes('Chrome')) return 'Safari on ' + getOS(ua);
  if (ua.includes('Edg')) return 'Edge on ' + getOS(ua);
  if (ua.includes('Postman')) return 'Postman';
  
  return 'Unknown Device';
}

function getOS(ua) {
  if (ua.includes('Windows')) return 'Windows';
  if (ua.includes('Mac')) return 'Mac';
  if (ua.includes('Linux')) return 'Linux';
  if (ua.includes('Android')) return 'Android';
  if (ua.includes('iPhone') || ua.includes('iPad')) return 'iOS';
  return 'Unknown OS';
}