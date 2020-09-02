import { Block, TextBlock, TitleBlock, TextColumnBlock, ButtonBlock } from "./classes/blocks";
import {css} from "./utils";

export const model = [
   new TitleBlock(
      'Some title on page',
      {
         tag: 'h2',
         styles: css({
            'background-color': '#eee',
            'border-radius': '10px',
            'margin-bottom': '20px'
         })
      }
   ),
   new TextBlock(
      'Carsonified мальчиков делать большую работу, представляет весьма информативным шоу, которое обсуждается широкий спектр веб-дизайн, основанный темы, а также новости о событиях Carsonified и работы.',
      {
         styles: 'margin-bottom: 20px'
      }
   ),
   new TextColumnBlock(
      [
         'Используйте подчеркивание. Мы начнем с самых основных трюк в типографии пьес: подчеркивания. <br> <a href="#" class="btn" style="display:inline-block; margin-top:10px;">Подробнее</a>',
         'Подчеркнул заголовок чувствует весомее и обеспечивает более определенное расстояние между заголовком и телом.',
         'Имейте в виду, это обязательно положительные или отрицательные признаки, но более нейтральное, вы должны решить, когда их присутствие хорошо это или плохо основе взгляда вы идете.',
      ],
      {
         styles: ''
      }
   )
];