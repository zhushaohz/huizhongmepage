import React from 'react';
import { Page, Text , Link} from '@geist-ui/core'
import { Github, Mail } from '@geist-ui/icons'
import './Contact.css';
function Contact() {
  return (
    <div className="About">
      <Page>
        <Page.Header>
          <Text h3>联系我</Text>
        </Page.Header>
        <Page.Content className="Content">
          <Link href="mailto:zhushaohz@gmail.com"><Mail size="50"/></Link><Text font="1.5rem">zhushaohz@gmail.com</Text>
          <Link href="https://github.com/zhushaohz"><Github size="50"/></Link><Text font="1.5rem">Github: zhushaohz</Text>
        </Page.Content>
        <Page.Footer>
          <Text small>Copyright © 2022 by  Huizhong</Text>
        </Page.Footer>
      </Page>
    </div>
  );
}


export default Contact;
