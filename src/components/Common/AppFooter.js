import React from 'react'
import { Layout, Row, Col, Typography } from 'antd'

const AppFooter = () =>
  <Layout.Footer style={{paddingTop:36,margin:0}}>
    <Row gutter={24}>
      <Col span={24} lg={12}>
        <Typography.Paragraph>
          <Typography.Title level={4}>策略与量化团队</Typography.Title>
          <Typography.Text>团队专注于数据研究，依托扎实的专业背景和先进的技术工具，对多维数据进行持续地跟踪分析，并建立了一套涵盖国内外宏观、产业以及金融市场的体系化投研指标。通过主动与被动相结合的方式，为客户提供涵盖大势研判、行业比较、资产配置等一系列深度服务。<br /></Typography.Text>
        </Typography.Paragraph>
      </Col>
      <Col span={24} lg={12}>
        <Typography.Paragraph>
          <Typography.Title level={4}>弘则弥道（上海）投资咨询有限公司</Typography.Title>
          <Typography.Text>
            地址：上海市世纪大道210号21世纪大厦12层1206室
            <br />
            电话：86-21-61645300
            <br />
            邮箱：service@hzinsights.com
            <br />
            官网：http://www.hzinsights.com
            <br />
            <br />
          </Typography.Text>
        </Typography.Paragraph>
      </Col>
      <Col span={24} >
      <Typography.Paragraph>
          <Typography.Title level={4}>免责声明</Typography.Title>
          <Typography.Text>本报告仅供弘则弥道（上海）投资咨询有限公司正式签约的机构客户使用，不会仅因接收人/接受机构收到本报告而将其视为客户。本报告根据国际和行业通行的准则，以合法渠道获得这些信息，尽可能保证可靠、准确和完整，但并不保证报告所述信息的准确性和完整性，也不保证本报告所包含的信息或建议在本报告发出后不会发生任何变更。本报告中所提供的信息仅供参考。报告中的内容不对投资者做出的最终操作建议做任何的担保，也没有任何形式的分享投资收益或者分担投资损失的书面或口头承诺。不作为客户在投资、法律、会计或税务等方面的最终操作建议，也不作为道义的、责任的和法律的依据或者凭证，无论是否已经明示或者暗示。在任何情况下，本公司不对客户/接受人/接受机构因使用报告中内容所引致的一切损失负责任，客户/接受人/接受机构需自行承担全部风险。
          </Typography.Text>
        </Typography.Paragraph>
      </Col>
      <Col span={24} style={{ textAlign: 'center' }}>
        Copyright ©2019 弘则弥道（上海）投资咨询有限公司 沪ICP备15035458号-1
      </Col>
    </Row>

  </Layout.Footer>

export default AppFooter