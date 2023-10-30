
import React from 'react';
import lista from './lista';

import {
  Page,
  Scroll,
  HeaderText,
  ResultArea,
  ResultItem
} from './styles';

<Page>
      <HeaderText>O que eu tenho para fazer?</HeaderText>
      <Scroll>

        {lista.map((item, index) => {
          return <ResultArea key={index}>
            <ResultItem>{item.task}</ResultItem>
            <ResultItem>{item.done}</ResultItem>
          </ResultArea>
        })}
      </Scroll>

</Page>