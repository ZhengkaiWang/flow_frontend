import React, { useState } from 'react';
import News from '../../components/News';

export function NewsContainer() {
  const [newsList, setNewsList] = useState()

  return <News
    data={{
      user: this.context.userID,
      newsInfoList: newsList,
      page: this.state.page,
      count: this.state.count
    }}
    method={{
      hanglePage: this.hanglePage,
      handleSearch: this.handleSearch,
      handleFilter: this.handleFilter,
      onNewsLikeClick: this.onNewsLikeClick,
      onNewsCommentClick: this.onNewsCommentClick,
    }}
  />
}