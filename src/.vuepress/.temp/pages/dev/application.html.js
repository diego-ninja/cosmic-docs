export const data = JSON.parse("{\"key\":\"v-603714bc\",\"path\":\"/dev/application.html\",\"title\":\"🛸 Creating a new application\",\"lang\":\"en-US\",\"frontmatter\":{\"description\":\"\"},\"headers\":[],\"readingTime\":{\"minutes\":0.01,\"words\":4},\"filePathRelative\":\"dev/01_application.md\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
