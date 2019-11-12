import pkgAxios from './pkgAxios'
/*
function setCookie(name,value) {
  var days = 14;
  var exp = new Date();
  exp.setTime(exp.getTime() + days*24*60*60*1000);
  document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()+"; path=/";
}
*/

export const newsApi = {
/*
  listComment : async (callback, params) => {
    try {
      let rst = await pkgAxios({
        url : 'flow/news/1/comments/',
        method : 'GET',
        params : params
      })
      console.log(rst)
      callback(rst.data)
    } catch(err) {
      console.log(err)
    }
  },
*/

  retrieveNews : async (callback, params) => {
    try {
      let rst = await pkgAxios({
        url : `news/${params.id}/`,
        method : 'GET',
        params : params
      })
      console.log(rst)
      callback(rst.data)
    } catch(err) {
      console.log(err)
    }
  },

  listNews : async (callback, params) => {
    try {
      let rst = await pkgAxios({
        url : 'news/',
        method : 'GET',
        params : params
      })
      const tmpData  = [...rst.data]
      tmpData.forEach(item => {
        if(item['comment'][0] === 'root'){
          item['comment'].shift()
        item.comment.forEach(item => item['treeLevel']=item.level
          )}}
        )
      console.log(rst)
      callback(rst.data)
    } catch(err) {
      console.log(err)
    }
  },

  deleteLike : async (callback, data) => {
    try {
      let rst = await pkgAxios({
        url : 'news/'+data['like_news_id']+'/likes/'+data['id']+'/',
        method : 'DELETE',
        data : data
      })
      console.log(rst)
      callback(rst.data)
    } catch (err){
      console.log(err)
    }
  },

  postLike : async (callback, data) => {
    try {
      let rst = await pkgAxios({
        url : 'news/'+data['like_news_id']+'/likes/',
        method : 'POST',
        data : data
      })
      console.log(rst)
      callback(rst.data)
    } catch (err){
      console.log(err)
    }
  },

  patchLike : async (callback, data) => {
    try {
      let rst = await pkgAxios({
        url : 'news/'+data['newsId']+'/likes/'+data['id']+'/',
        method : 'PATCH',
        data : data
      })
      console.log(rst)
      callback(rst.data)
    } catch (err){
      console.log(err)
    }
  },

  postComment : async (callback, data) => {
    try {
      let rst = await pkgAxios({
        url : 'news/'+data['comment_news_id']+'/comments/',
        method : 'POST',
        data : data
      })
      console.log(rst)
      callback(rst.data)
    } catch (err){
      console.log(err)
    }

  },


  websocket : (callback, ws) => {
    ws.onopen = () => {
      console.log("Connection open ...");
      ws.send(JSON.stringify({
        'message': 'hhh'
      }));
    }
    ws.onerror = (evt) => console.log(evt)
    ws.onmessage = (evt) => callback(evt) 
    ws.onclose = (evt) => console.log("Connection closed.")
  },

}

export const editorApi = {

  listArticles : async (callback, data) => {
    try {
      let rst = await pkgAxios({
        url : 'articles/',
        method : 'GET',
        params : data
      })
      console.log(rst)
      callback(rst.data)
    } catch(err) {
      console.log(err)
    }
  },


  listImages : async (callback, data) => {
    try {
      let rst = await pkgAxios({
        url : 'images/',
        method : 'GET',
        params : data
      })
      console.log(rst)
      callback(rst.data)
    } catch(err) {
      console.log(err)
    }
  },

  listAuthors : async (callback, data) => {
    try {
      let rst = await pkgAxios({
        url : 'authors/',
        method : 'GET',
        params : data
      })
      console.log(rst)
      callback(rst.data)
    } catch(err) {
      console.log(err)
    }
  },

  listCategorys : async (callback, data) => {
    try {
      let rst = await pkgAxios({
        url : 'categorys/',
        method : 'GET',
        params : data
      })
      console.log(rst)
      callback(rst.data)
    } catch(err) {
      console.log(err)
    }
  },
  postRelatedArticles : async (data,callback) => {
    try {
      let rst = await pkgAxios({
        url : `news/${data.news_id}/related_articles/`,
        method : 'POST',
        data : data
      })
      console.log(rst)
      callback(rst.data)
    } catch(err) {
      console.log(err)
    }
  },
  postNews : async (data,callback) => {

    const wrappedData = {...data}
    wrappedData.content = data.content.model
    wrappedData.relatedNews = data.relatedNews.checkedList.map(item=>item.slice(0, item.indexOf('@')))
    console.log(data,wrappedData)
    try {
      let rst = await pkgAxios({
        url : 'news/',
        method : 'POST',
        data : wrappedData
      })
      console.log(rst)
      callback(rst.data, wrappedData)
    } catch(err) {
      console.log(err)
    }
  }
}

export const checkApi = {
  ListNews : async (callback, data) => {
    try {
      let rst = await pkgAxios({
        url : 'news/',
        method : 'GET',
        params : data
      })
      console.log(rst)
      callback(rst.data)
    } catch(err) {
      console.log(err)
    }
  },

  patchNews : async (callback, data) => {
    try {
      let rst = await pkgAxios({
        url : 'news/'+data['newsId']+'/',
        method : 'PATCH',
        data : data
      })
      console.log(data)
      console.log(rst)
    } catch(err) {
      console.log(err)
    }
  },

  deleteNews : async (callback, data) => {
    try {
      let rst = await pkgAxios({
        url : 'news/'+data['newsId']+'/',
        method : 'PATCH',
        data : data
      })
      console.log(data)
      console.log(rst)
    } catch(err) {
      console.log(err)
    }
  }
}