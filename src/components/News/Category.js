import React from 'react'
import { Cascader } from 'antd';

const Category = props => {

  const options = [
    {
      key: '策略思考',
      value: '策略思考',
      label: '策略思考',
      children: [
        {
          key: '2',
          value: '每日复盘',
          label: '每日复盘',
        },
        {
          key: '10',
          value: '周度思考',
          label: '周度思考',
        },
        {
          key: '3',
          value: '行业配置',
          label: '行业配置',
        },
        {
          key: '4',
          value: '组合策略',
          label: '组合策略',
        },
        {
          key: '13',
          value: '模拟组合',
          label: '模拟组合',
        },
      ],
    },
    {
      key: '市场跟踪',
      value: '市场跟踪',
      label: '市场跟踪',
      children: [
        {
          key: '9',
          value: '估值研究',
          label: '估值研究',
        },
        {
          key: '7',
          value: '资金流向',
          label: '资金流向',
        },
        {
          key: '11',
          value: '大类资产',
          label: '大类资产',
        },
        {
          key: '18',
          value: '数据日报',
          label: '数据日报',
        },
        {
          key: '20',
          value: '宏观高频',
          label: '宏观高频',
        },
        {
          key: '8',
          value: '市场情绪',
          label: '市场情绪',
        },
        {
          key: '21',
          value: '因子收益',
          label: '因子收益',
        },
        {
          key: '22',
          value: '资本品跟踪',
          label: '资本品跟踪',
        },
        {
          key: '23',
          value: '资本品周报',
          label: '资本品周报',
        }
      ],
    },
    {
      key: '2',
      value: '产业跟踪',
      label: '产业跟踪',
      children: [
        {
          key: '1',
          value: '生猪',
          label: '生猪',
        },
        {
          key: '12',
          value: '投资品',
          label: '投资品',
        },
        {
          key: '6',
          value: '汽车',
          label: '汽车',
        },
        {
          key: '5',
          value: '货币信用',
          label: '货币信用',
        },
        {
          key: '19',
          value: '模拟组合',
          label: '模拟组合',
        },
      ],
    }, {
      value: '专题报告',
      label: '专题报告',
      children: [
        {
          key: '14',
          value: '路演报告',
          label: '路演报告',
        },
        {
          key: '15',
          value: '专项课题',
          label: '专项课题',
        },
      ],
    }, {
      key: '量化研究',
      value: '量化研究',
      label: '量化研究',
      children: [
        {
          key: '24',
          value: '股票因子',
          label: '股票因子',
        }
      ]
    }
  ]

  const onChange = value =>
    props.method.handleFilter(value)

  return (
    <Cascader
      changeOnSelect
      placeholder="请选择分类"
      options={options}
      expandTrigger="hover"
      onChange={onChange}
    />)

}

export default Category