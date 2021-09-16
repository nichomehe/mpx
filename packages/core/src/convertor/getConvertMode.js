const convertModes = {
  'wx-ali': 'wxToAli',
  'wx-web': 'wxToWeb',
  'wx-tenon': 'wxToTenon',
  'wx-swan': 'wxToSwan',
  'wx-qq': 'wxToQq',
  'wx-tt': 'wxToTt',
  'wx-jd': 'wxToJd',
  'wx-dd': 'wxToDd'
}

export function getConvertMode (srcMode) {
  return convertModes[srcMode + '-' + __mpx_mode__]
}
