const TAG_NAME = 'swiper'

module.exports = function ({ print }) {
  const aliPropLog = print({ platform: 'ali', tag: TAG_NAME, isError: false })
  const aliEventLog = print({ platform: 'ali', tag: TAG_NAME, isError: false, type: 'event' })
  const baiduPropLog = print({ platform: 'baidu', tag: TAG_NAME, isError: false })
  const baiduEventLog = print({ platform: 'baidu', tag: TAG_NAME, isError: false, type: 'event' })
  const qqPropLog = print({ platform: 'qq', tag: TAG_NAME, isError: false })
  const ttPropsLog = print({ platform: 'bytedance', tag: TAG_NAME, isError: false })
  const ttEventLog = print({ platform: 'bytedance', tag: TAG_NAME, isError: false, type: 'event' })

  return {
    test: TAG_NAME,
    props: [
      {
        test: /^(display-multiple-items|skip-hidden-item-layout|easing-function)$/,
        ali: aliPropLog
      },
      {
        test: /^(skip-hidden-item-layout|easing-function)$/,
        swan: baiduPropLog
      },
      {
        test: /^(easing-function)$/,
        qq: qqPropLog
      },
      {
        test: /^(previous-margin|next-margin|skip-hidden-item-layout|easing-function)$/,
        tt: ttPropsLog
      }
    ],
    event: [
      {
        test: /^(change)$/,
        ali (eventName) {
          const eventMap = {
            'change': 'change'
          }
          return eventMap[eventName]
        }
      },
      {
        test: /^(transition|animationfinish)$/,
        ali: aliEventLog,
        tt: ttEventLog
      },
      {
        test: /^(transition)$/,
        swan: baiduEventLog
      }
    ]
  }
}
