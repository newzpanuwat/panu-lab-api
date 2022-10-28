/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Header, HttpCode, Post, Res, HttpStatus } from '@nestjs/common';
import { CreateArticlesDto } from './create-articles.dto';
import { Response } from 'express';

@Controller('articles')
export class ArticlesController {
  @Post()
  @Header('Cache-Control', 'none')
  @HttpCode(201)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(@Body() createArticlesDto: CreateArticlesDto) {
    return 'This is add new articles';
  }

  @Get()
  @HttpCode(200)
  findAll(@Res() res: Response) {
    // eslint-disable-next-line prettier/prettier
    res.status(HttpStatus.OK).json([
      {
        blogsAll: [
            {
            id: 1,
            title: `Refactor / Clean code: ทำไมเราถึงควรทำสิ่งนี้ ?`,
            url: `https://medium.com/@newzpanuwat/refactor-clean-code-why-a545b05e3728`,
            author: `New Panuwat`,
            date: `30 Aug 2022`,
            imageUrl:
              `https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80`,
            description:
              `จุดประสงค์หลักเลยของการทำ Code Refactoring คือการ ลด technical debt เพื่อทำให้ โค้ดของเรามีคุณภาพมากขึ้น easy maintain, clean, readability และ ต้นทุนการพัฒนาก็จะลดลงไปด้วย เราไปดูกันว่า มีปัจจัยอะไรบ้าง`,
          },
          {
            id: 2,
            title: `Dynamic Import (Next.js)`,
            url: `https://medium.com/@newzpanuwat/dynamic-import-next-js-d96408353848`,
            author: `New Panuwat`,
            date: `1 Aug 2022`,
            imageUrl: `https://miro.medium.com/max/1400/1*LETruUal4sqbvZfVOxEnpQ.jpeg`,
            description:
              `จุดประสงค์หลักเลยของการทำ Code Refactoring คือการ ลด technical debt เพื่อทำให้ โค้ดของเรามีคุณภาพมากขึ้น easy maintain, clean, readability และ ต้นทุนการพัฒนาก็จะลดลงไปด้วย เราไปดูกันว่า มีปัจจัยอะไรบ้าง`,
          },
          {
            id: 3,
            title: `Optional Chaining ใช้ดีไหม?`,
            url: `https://medium.com/@newzpanuwat/optional-chaining-61aa2c87f2e4`,
            author: `New Panuwat`,
            date: `20 July 2022`,
            imageUrl: `https://miro.medium.com/max/1400/1*ItOBrhvSYpPCqs6XV6bmLg.jpeg`,
            description:
              `จุดประสงค์หลักเลยของการทำ Code Refactoring คือการ ลด technical debt เพื่อทำให้ โค้ดของเรามีคุณภาพมากขึ้น easy maintain, clean, readability และ ต้นทุนการพัฒนาก็จะลดลงไปด้วย เราไปดูกันว่า มีปัจจัยอะไรบ้าง`,
          },
          {
            id: 4,
            title: `มาทำ Ruby Gems ใช้เอง กันเถอะ`,
            url: `https://medium.com/swiftlet-tech/%E0%B8%A1%E0%B8%B2%E0%B8%97%E0%B8%B3-ruby-gems-%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B9%80%E0%B8%AD%E0%B8%87-%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%96%E0%B8%AD%E0%B8%B0-2e06d7f5af3e`,
            author: `New Panuwat`,
            date: `17 Mar 2020`,
            imageUrl: `https://miro.medium.com/max/1400/1*zkA1cWgJDlMUxI5TRcIHdQ.jpeg`,
            description:
              `จุดประสงค์หลักเลยของการทำ Code Refactoring คือการ ลด technical debt เพื่อทำให้ โค้ดของเรามีคุณภาพมากขึ้น easy maintain, clean, readability และ ต้นทุนการพัฒนาก็จะลดลงไปด้วย เราไปดูกันว่า มีปัจจัยอะไรบ้าง`,
          },
          {
            id: 5,
            title: `Ruby Conference TH 2019 มีอะไรบ้าง`,
            url: `https://medium.com/swiftlet-tech/ruby-conference-th-2019-%E0%B8%A1%E0%B8%B5%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%87-77476f12e88d`,
            author: `New Panuwat`,
            date: `8 Sep 2019`,
            imageUrl:
              `https://miro.medium.com/max/1400/1*eFgBObf5qDDNpTn4ZUZW-Q@2x.jpeg`,
            description:
              `จุดประสงค์หลักเลยของการทำ Code Refactoring คือการ ลด technical debt เพื่อทำให้ โค้ดของเรามีคุณภาพมากขึ้น easy maintain, clean, readability และ ต้นทุนการพัฒนาก็จะลดลงไปด้วย เราไปดูกันว่า มีปัจจัยอะไรบ้าง`,
          },
          {
            id: 6,
            title: `Ruby: select, reject, collect ต่างกันอย่างไร?`,
            url: `https://medium.com/swiftlet-tech/ruby-select-reject-collect-%E0%B8%95%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B9%84%E0%B8%A3-4c1780ca8bf5`,
            author: `New Panuwat`,
            date: `3 Aug 2019`,
            imageUrl: `https://miro.medium.com/max/1400/1*6sJFLwjsSGrHShQxBIxr0g.jpeg`,
            description:
              `จุดประสงค์หลักเลยของการทำ Code Refactoring คือการ ลด technical debt เพื่อทำให้ โค้ดของเรามีคุณภาพมากขึ้น easy maintain, clean, readability และ ต้นทุนการพัฒนาก็จะลดลงไปด้วย เราไปดูกันว่า มีปัจจัยอะไรบ้าง`,
          },
          {
            id: 7,
            title: `Ruby: Inject`,
            url: `https://medium.com/swiftlet-tech/ruby-inject-a1575a64a12c`,
            author: `New Panuwat`,
            date: `29 July 2019`,
            imageUrl: `https://miro.medium.com/max/1400/1*-IZ2Xi69uftQ5aYGVFz20g.jpeg`,
            description:
              `Inject เป็น method ของ ruby ที่อยู่ใน module Enumerable ของRuby ที่มีให้เราได้เรียกใช้กัน ซึ่งโดยวิธีการใช้ก็ไม่ยาก เราจะใช้ก็ต่อเมื่อ ต้องการ ใส่อะไรก็ตามที่เราต้องการใส่ในขณะวนลูป`,
          },
          {
            id: 8,
            title: `Ruby on Rails: find vs find_by`,
            url: `https://medium.com/swiftlet-tech/ruby-find-vs-find-by-801835898eb5`,
            author: `New Panuwat`,
            date: `22 July 2019`,
            imageUrl: `https://miro.medium.com/max/1400/1*mil2vH4QC2AjE2mPZPSVdQ.jpeg`,
            description:
              `ตั้งใจว่าจะเขียน เรื่องราวของ Ruby ให้มากขึ้น เป็น tricks เล็กๆน้อยๆในเรื่องราวของ Ruby ที่เจอมาในชีวิตประจำวัน หรือ ไปอ่านเจอมาแล้วคิดว่ามีประโยชน์ เลยอยากจะเอามาแชร์ ก็เลยคิดว่าจะรวบรวมมาเขียนเป็น Blog สั้นๆให้อ่านกัน`,
          },
          {
            id: 9,
            title: `เขียน Test กับ Jest กัน`,
            url: `https://medium.com/swiftlet-tech/%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99test-%E0%B8%81%E0%B8%B1%E0%B8%9A-jest-%E0%B8%81%E0%B8%B1%E0%B8%99-44ebbe86a836`,
            author: `New Panuwat`,
            date: `2 July 2019`,
            imageUrl: `https://miro.medium.com/max/1400/1*Q5SPMMAgr0a5iwJ9HCVnSQ.jpeg`,
            description:
              `เรื่องมันมีอยู่ว่า…ช่วงนี้ผมได้มีโอกาสมาเริ่มเขียนฝั่งหน้าบ้านมากขึ้น(react.js) แล้วต้องมายุ่งกับเรื่องของ Logic ด้วยในบางจุด และหลังจากมีการ code reviews ไป `,
          },
          {
            id: 10,
            title: `1 วันกับ LINE Developer Conference 2019`,
            url: `https://medium.com/@newzpanuwat/1-%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%81%E0%B8%B1%E0%B8%9A-line-developer-conference-2019-24994da7d5ea`,
            author: `New Panuwat`,
            date: `26 Mar 2019`,
            imageUrl:
              `https://miro.medium.com/max/1400/1*QFTZGXDOgg2IEQiZoQ0xqQ@2x.jpeg`,
            description:
              `จุดประสงค์หลักเลยของการทำ Code Refactoring คือการ ลด technical debt เพื่อทำให้ โค้ดของเรามีคุณภาพมากขึ้น easy maintain, clean, readability และ ต้นทุนการพัฒนาก็จะลดลงไปด้วย เราไปดูกันว่า มีปัจจัยอะไรบ้าง`,
          },
          {
            id: 11,
            title: `Push Notifications with Gatsby.js`,
            url: `https://medium.com/swiftlet-tech/push-notifications-with-gatsby-js-ca3c5155dc`,
            author: `New Panuwat`,
            date: `26 Jan 2019`,
            imageUrl: `https://miro.medium.com/max/1400/1*NXLOZThuuTKTl8udElpRrw.jpeg`,
            description:
              `ต่อจากซีรี่ย์ ของการ Build Static web app ของเรา วันนี้เราจะมาพูดกันถึงเรื่อง Push notifications หากใครยังไม่ได้ดูก่อนหน้านี้ รับชมได้ที่ลิ้งค์ด้านล่าง`,
          },
          {
            id: 12,
            title: `Gatsby.js from scratch and deploy with surge.sh`,
            url: `https://medium.com/swiftlet-tech/gatsby-js-from-scratch-and-deploy-with-surge-sh-b08334fbafc0`,
            author: `New Panuwat`,
            date: `26 Jan 2019`,
            imageUrl: `https://miro.medium.com/max/1386/1*S2es4qwPQTVsIjLAktNUwA.jpeg`,
            description:
              `ต่อเนื่องจากบทความที่แล้ว เราสามารถสร้าง Static web อย่างง่ายไปแล้ว ในบทความนี้เราจะมาดูกันว่า หากเราต้องการเริ่มสร้าง โปรเจคใหม่เป็นหน้าเว็บง่ายๆเลยเราต้องทำอะไรอย่างไรบ้าง และเราจะdeploy ขึ้น surge ได้อย่างไร`,
          },
          {
            id: 13,
            title: `สร้าง Static web อย่างง่ายด้วย Gatsby. js ในเวลา 5 นาที`,
            url: `https://medium.com/swiftlet-tech/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-static-web-%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-gatsby-js-%E0%B9%83%E0%B8%99%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2-5-%E0%B8%99%E0%B8%B2%E0%B8%97%E0%B8%B5-1da2f96ca1fc`,
            author: `New Panuwat`,
            date: `20 Jan 2019`,
            imageUrl: `https://miro.medium.com/max/636/1*PBfj6dQ7MYzbrivd7A0rSQ.png`,
            description:
              `เครื่องมือหนึ่งที่ช่วยให้เราสร้างเว็บแบบ Static ของฝั่ง React ให้สำเร็จอย่างง่าย และ เร็วมีหลายตัว แต่ตัวนึงที่อยากแนะนำคือ gatsby.js`,
          },
          {
            id: 14,
            title: `Start building a better web #1`,
            url: `https://medium.com/swiftlet-tech/start-building-a-better-web-1-341f1d95c839`,
            author: `New Panuwat`,
            date: `10 Jan 2019`,
            imageUrl: `https://miro.medium.com/max/1400/1*UUWWv7fGDMjCJy9tPGIjMQ.png`,
            description:
              `หากคุณมีเว็บของคุณอยู่แล้ว เราจะสามารถทำให้เว็บของเรานั้นออกมาดีขึ้นได้นั้นมีหลากหลายวิธีเช่น ทำให้เว็บของเราเป็นที่รู้จักมากขึ้น โหลดเร็วขึ้น มีความปลอดภัยมากขึ้น และอื่นๆอีกเพียบบ`,
          },
          {
            id: 15,
            title: `Docker and Container`,
            url: `https://medium.com/swiftlet-tech/docker-and-container-a4a2d71bc978`,
            author: `New Panuwat`,
            date: `15 Feb 2018`,
            imageUrl: `https://miro.medium.com/max/624/1*6aiG8217Vy9kEpF5k9ag4Q.gif`,
            description:
              `Docker คือ ตัวหนึ่งที่มีการทำงานในลักษณะจำลองสภาพแวดล้อมขึ้นมาบนเครื่อง server เพื่อใช้ในการ run services บางอย่าง โดยอาจจะนึกถึงการทำงานคล้ายๆกับ Virtual Machine แต่ Docker ใช้เพียงแค่ container หนึ่ง สร้างขึ้นมาเพื่อ run เพียง 1 service เท่านั้น`,
          },
          {
            id: 16,
            title: `Ruby 101: The basics EP.3`,
            url: `https://medium.com/@newzpanuwat/ruby-101-the-basics-ep-3-f1a1ee1cf2a9`,
            author: `New Panuwat`,
            date: `10 Feb 2018`,
            imageUrl: `https://miro.medium.com/max/952/1*cPaZsUcw4aUyMVPeoMRjYg.png`,
            description:
              `จุดประสงค์หลักเลยของการทำ Code Refactoring คือการ ลด technical debt เพื่อทำให้ โค้ดของเรามีคุณภาพมากขึ้น easy maintain, clean, readability และ ต้นทุนการพัฒนาก็จะลดลงไปด้วย เราไปดูกันว่า มีปัจจัยอะไรบ้าง`,
          },
          {
            id: 17,
            title: `Ruby 101: The basics EP.2`,
            url: `https://medium.com/swiftlet-tech/ruby-100-the-basics-b0002d6db57c`,
            author: `New Panuwat`,
            date: `8 Feb 2018`,
            imageUrl: `https://miro.medium.com/max/1400/1*7wV-UrVCgW2SJwzeDdgy_Q.png`,
            description:
              `จุดประสงค์หลักเลยของการทำ Code Refactoring คือการ ลด technical debt เพื่อทำให้ โค้ดของเรามีคุณภาพมากขึ้น easy maintain, clean, readability และ ต้นทุนการพัฒนาก็จะลดลงไปด้วย เราไปดูกันว่า มีปัจจัยอะไรบ้าง`,
          },
          {
            id: 18,
            title: `Ruby 101: The basics`,
            url: `https://medium.com/swiftlet-tech/ruby-100-the-basics-c5398cfd7b30`,
            author: `New Panuwat`,
            date: `20 July 2017`,
            imageUrl: `https://miro.medium.com/max/1400/1*q-an9QST7r8PdGCLL-TDJg.jpeg`,
            description:
              `จุดประสงค์หลักเลยของการทำ Code Refactoring คือการ ลด technical debt เพื่อทำให้ โค้ดของเรามีคุณภาพมากขึ้น easy maintain, clean, readability และ ต้นทุนการพัฒนาก็จะลดลงไปด้วย เราไปดูกันว่า มีปัจจัยอะไรบ้าง`,
          }
        ],
      },
    ]);
  }
}
