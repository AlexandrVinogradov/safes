const header = '[&>.ant-collapse-item>.ant-collapse-header]'
const content = '[&>.ant-collapse-item>.ant-collapse-content]'
const contentBox = '[&>.ant-collapse-item>.ant-collapse-content>.ant-collapse-content-box]'
const a = '[&>.ant-collapse-item>.ant-collapse-content>.ant-collapse-content-box>ul>li>a]'
const li = '[&>.ant-collapse-item>.ant-collapse-content>.ant-collapse-content-box>ul>li]'
const icon = '[&>.ant-collapse-item>.ant-collapse-header>.ant-collapse-expand-icon]'

export const s = {
	collapse: `
  ${header}:text-dark ${header}:bg-white ${header}:py-[13px] ${header}:pl-0 ${header}:pr-0 ${header}:font-semibold ${header}:text-[16px] ${header}:font-noto
  ${content}:bg-white
  ${contentBox}:p-0
  ${a}:text-dark ${a}:font-noto ${a}:pl-4 hover:${a}:text-branded
  ${li}:py-[13px] ${li}:border-t
  ${icon}:order-2
  `,
	arrowIcon: `-rotate-90 duration-300`,
	activeArrowIcon: `rotate-0 !text-branded`,
}
