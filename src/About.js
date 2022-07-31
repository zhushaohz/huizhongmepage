import React from 'react';
import { Page, Text } from '@geist-ui/core'
import './About.css';
function About() {
  return (
    <div className="About">
      <Page>
        <Page.Header>
          <Text h3>关于我</Text>
        </Page.Header>
        <Page.Content>
          <Text font="1.2rem">
            <Text>男，不爱说话，24岁，喜欢思考，在读研究生</Text>
            <Text>研究过Crypto和web3，现在认为大多数为骗局，尤其是元宇宙和nft项目</Text>
            <Text>研究机械键盘，目前投入四千人民币，曾自己画电路板，但不会焊接元件，现在认为键圈圈钱割韭菜较多。刚买了zoom65，现在在用cheap60</Text>
            <Text>喜欢电子产品，最开始喜欢锤子和魅族，后来喜欢苹果，已集齐全家桶，喜欢苹果主要是有好用的访问外网软件Quantumult X和Surge</Text>
            <Text>喜欢下载个人开发者的App，但是自己学习swift开发App搁置，认为技术只是工具，设计和创意更重要</Text>
            <Text>喜欢逛即刻社区，但是有时候也会觉得里面的氛围太过小资，不够接地气</Text>
            <Text>喜欢听歌，听最多的是周杰伦的歌，听了三年说唱，喜欢杨和苏KeyNG</Text>
            <Text>喜欢艺术和设计，但是学习画画放弃了，计划学习blender软件</Text>
            <Text>喜欢健身和运动，但是有很多别的诱惑，挤占了我的时间</Text>
            <Text>讨厌先入为主</Text>
            <Text>讨厌酒桌文化</Text>
            <Text>希望我可以做一个有想法的人，希望我可以保持积极向上</Text>
          </Text>
        </Page.Content>
        <Page.Footer>
          <Text small>Copyright © 2022 by  Huizhong</Text>
        </Page.Footer>
      </Page>
    </div>
  );
}


export default About;
