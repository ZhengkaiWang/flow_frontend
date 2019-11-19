import { editorApi } from './api'

const CategoryDict = {}
const CategoryCascade = []

editorApi.listCategorys({},
  rspData => {
    rspData.forEach(item =>
      CategoryDict[item.id] = item
    )
    rspData.forEach(item => {
      let index = CategoryCascade.findIndex(element => item.category_name === element.key)
      return -1 === index
        ? CategoryCascade.push({
          value: item.category_name,
          key: item.category_name,
          label: item.category_name,
          children: [{
            value: item.id,
            key: item.sub_category_name,
            label: item.sub_category_name
          }]
        })
        : CategoryCascade[index].children.push({
          value: item.id,
          key: item.sub_category_name,
          label: item.sub_category_name
        })
      }
    )
  }
)


export { CategoryCascade, CategoryDict }
// export default Category