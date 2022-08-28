// import logo from './logo.svg';
import './Home.css';
import { Page, Text , Divider , Grid, Card , Spacer} from '@geist-ui/core'
import React from 'react';
// import { Link } from "react-router-dom";
import  { Link } from "@geist-ui/core";

// const name = 'Huizhong'
function Home() {
  const name = "慧中"
  return (
    <div className="Home">
      <Page>
        <Page.Header>
          <Grid.Container gap={0} justify="center">
            <Grid xs={24} md={24}><Text width="100%" h1 className="Title">{name}</Text></Grid>
            <Grid xs={24} md={24}><Text width="100%" h2 del className="subTitle">没有标签</Text></Grid>
            <Grid xs={24} md={6}><Text width="100%" h2 i className="Motto">永远保持好奇</Text></Grid>
            <Grid xs={24} md={6}><Text width="100%" h2 i className="Motto">永远保持危机感</Text></Grid>
          </Grid.Container>
          <Divider />
        </Page.Header>
        <Page.Content>
          <Grid.Container gap={0} justify="center">
            <Grid xs={24} md={4} justify="center"><div className="navigation"><Link href="/about">About</Link></div></Grid>
            <Grid xs={24} md={4} justify="center"><div className="navigation"><Link href="/works">Works</Link></div></Grid>
            <Grid xs={24} md={4} justify="center"><div className="navigation"><Link href="/contact">Contact</Link></div></Grid>
            <Grid xs={24} md={24}>
              <Spacer h={5}/>
            </Grid>
            <Grid xs={24} md={24} justify="center">

              <Card hoverable shadow>
                <div>
                  <Text font="1.5rem" className="poem">不过分积极</Text>
                  <Text font="1.5rem" className="poem">不沉迷任何一种状态</Text>
                  <Text font="1.5rem" className="poem">跟随季节的变化</Text>
                  <Text font="1.5rem" className="poem">发芽，生长，繁盛，孤寂</Text>
                  <Text font="1.5rem" className="poem">往复循环</Text>
                  <Text font="1.5rem" className="poem">——《沉思录》</Text>

                </div>
              </Card>
            </Grid>
          </Grid.Container>

        </Page.Content>
        <Page.Footer>
          <Text small>Copyright © 2022 by  Huizhong</Text>
        </Page.Footer>
      </Page>

    </div>
  );
}

export default Home;




