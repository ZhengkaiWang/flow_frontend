import moment from 'moment'

const generateArticleTitle = article => {
  const momentDate = moment(article.publish_date.slice(0, article.publish_date.indexOf('T')))
   const category = article.show_category_in_title===1
    ?`分类:`
    :``
  const date = article.update_frequency==='daily'
    ?`(${article.publish_date.slice(2, 4)}${article.publish_date.slice(5, 7)}${article.publish_date.slice(8, 10)})`
    : article.update_frequency==='weekly'
      ?`(2019年第${momentDate.isoWeek()}周)`
      :article.update_frequency==='monthly'
        ?`(${article.publish_date.slice(0, 4)}年${article.publish_date.slice(5, 7)}月)`
        :``
  return `【弘则策略】${category}${article.title}${date}`
}

export default generateArticleTitle