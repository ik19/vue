<template>
  <article class="lbzui-components-card">
    <h2 class="lbz-typography--h5"># Elevated card</h2>

    <h3 class="lbz-typography--subtitle1">$ type: 'elevated' (default), 'outlined'</h3>

    <lbz-card @click.stop="fclick">
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-card__title">Title goes here</span>
          <span class="lbz-card__subtitle">Secondary line text Lorem ipsum dolor sit amet</span>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-aspect-ratio--1x1 lbz-card__media">
            <img src="../../assets/img/placeholder@1x1.png">
          </div>
        </div>
      </template>
      <template #end>
        <div class="lbz-card__actions__buttons">
          <lbz-button>Action 1</lbz-button>
          <lbz-button>Action 2</lbz-button>
        </div>
      </template>
    </lbz-card>
    <br>
    <lbz-card>
      <template #start>
        <div class="lbz-card__header__start">
          <img class="lbz-card__avatar" src="../../assets/img/placeholder@1x1.png">
        </div>
        <div class="lbz-card__header__center">
          <span class="lbz-card__title">Title goes here</span>
          <span class="lbz-card__subtitle">Secondary text</span>
        </div>
        <div class="lbz-card__header__end">
          <lbz-icon-button>more_vert</lbz-icon-button>
        </div>
      </template>
      <template #center>
        <div class="lbz-aspect-ratio--16x9 lbz-card__media">
          <img src="../../assets/img/placeholder@16x9.png">
        </div>
        <p class="lbz-card__supporting-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      </template>
      <template #end>
        <div class="lbz-card__actions__buttons">
          <lbz-button>Action 1</lbz-button>
          <lbz-button>Action 2</lbz-button>
        </div>
        <div class="lbz-card__actions__icons">
          <lbz-icon-button>favorite</lbz-icon-button>
          <lbz-icon-button>share</lbz-icon-button>
        </div>
      </template>
    </lbz-card>
    <br>
    <lbz-card>
      <template #center>
        <div class="lbz-aspect-ratio--16x9 lbz-card__media">
          <img src="../../assets/img/placeholder@16x9.png">
          <div class="lbz-card__supporting-text">
            <span class="lbz-card__title">Title goes here</span>
            <span class="lbz-card__subtitle">Secondary text</span>
          </div>
        </div>
        <div class="lbz-card__supporting-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </div>
      </template>
      <template #end>
        <div class="lbz-card__actions__buttons">
          <lbz-button>Action 1</lbz-button>
          <lbz-button>Action 2</lbz-button>
        </div>
        <div class="lbz-card__actions__icons">
          <lbz-icon-button>more_vert</lbz-icon-button>
        </div>
      </template>
    </lbz-card>
    <br>
    <lbz-card>
      <template #center>
        <div class="lbz-aspect-ratio--16x9 lbz-card__media">
          <img src="../../assets/img/placeholder@16x9.png">
        </div>
        <div class="lbz-card__supporting-text">
          <span class="lbz-card__title">Title</span>
          <span class="lbz-card__subtitle">Secondary text</span>
          <lbz-divider/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </div>
      </template>
      <template #end>
        <div class="lbz-card__actions__buttons">
          <lbz-button>Action 1</lbz-button>
        </div>
      </template>
    </lbz-card>

    <h3 class="lbz-typography--subtitle1">$ tag: 'div' (default), 'a', 'x'</h3>

    <lbz-card tag="a" href="#/components/card">
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-card__title">Title goes here</span>
          <span class="lbz-card__subtitle">Secondary line text Lorem ipsum dolor sit amet</span>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-aspect-ratio--1x1 lbz-card__media">
            <img src="../../assets/img/placeholder@1x1.png">
          </div>
        </div>
      </template>
      <template #end>
        <div class="lbz-card__actions__buttons">
          <lbz-button>Action 1</lbz-button>
          <lbz-button>Action 2</lbz-button>
        </div>
      </template>
    </lbz-card>

    <h3 class="lbz-typography--subtitle1">$ background: 'primary', 'secondary', 'surface' (default), 'error', 'light', 'dark'</h3>

    <lbz-card background="primary">
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-card__title">Title goes here</span>
          <span class="lbz-card__subtitle">Secondary line text Lorem ipsum dolor sit amet</span>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-aspect-ratio--1x1 lbz-card__media">
            <img src="../../assets/img/placeholder@1x1.png">
          </div>
        </div>
      </template>
    </lbz-card>
    <lbz-card background="secondary">
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-card__title">Title goes here</span>
          <span class="lbz-card__subtitle">Secondary line text Lorem ipsum dolor sit amet</span>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-aspect-ratio--1x1 lbz-card__media">
            <img src="../../assets/img/placeholder@1x1.png">
          </div>
        </div>
      </template>
    </lbz-card>
    <lbz-card>
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-card__title">Title goes here</span>
          <span class="lbz-card__subtitle">Secondary line text Lorem ipsum dolor sit amet</span>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-aspect-ratio--1x1 lbz-card__media">
            <img src="../../assets/img/placeholder@1x1.png">
          </div>
        </div>
      </template>
    </lbz-card>
    <lbz-card background="error">
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-card__title">Title goes here</span>
          <span class="lbz-card__subtitle">Secondary line text Lorem ipsum dolor sit amet</span>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-aspect-ratio--1x1 lbz-card__media">
            <img src="../../assets/img/placeholder@1x1.png">
          </div>
        </div>
      </template>
    </lbz-card>
    <lbz-card background="light">
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-card__title">Title goes here</span>
          <span class="lbz-card__subtitle">Secondary line text Lorem ipsum dolor sit amet</span>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-aspect-ratio--1x1 lbz-card__media">
            <img src="../../assets/img/placeholder@1x1.png">
          </div>
        </div>
      </template>
    </lbz-card>
    <lbz-card background="dark">
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-card__title">Title goes here</span>
          <span class="lbz-card__subtitle">Secondary line text Lorem ipsum dolor sit amet</span>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-aspect-ratio--1x1 lbz-card__media">
            <img src="../../assets/img/placeholder@1x1.png">
          </div>
        </div>
      </template>
    </lbz-card>

    <h3 class="lbz-typography--subtitle1">$ darkened: true, false (default)</h3>

    <lbz-card background="primary" darkened>
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-card__title">Title goes here</span>
          <span class="lbz-card__subtitle">Secondary line text Lorem ipsum dolor sit amet</span>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-aspect-ratio--1x1 lbz-card__media">
            <img src="../../assets/img/placeholder@1x1.png">
          </div>
        </div>
      </template>
    </lbz-card>
    <lbz-card background="secondary" darkened>
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-card__title">Title goes here</span>
          <span class="lbz-card__subtitle">Secondary line text Lorem ipsum dolor sit amet</span>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-aspect-ratio--1x1 lbz-card__media">
            <img src="../../assets/img/placeholder@1x1.png">
          </div>
        </div>
      </template>
    </lbz-card>
    <lbz-card background="error" darkened>
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-card__title">Title goes here</span>
          <span class="lbz-card__subtitle">Secondary line text Lorem ipsum dolor sit amet</span>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-aspect-ratio--1x1 lbz-card__media">
            <img src="../../assets/img/placeholder@1x1.png">
          </div>
        </div>
      </template>
    </lbz-card>
    <lbz-card background="light" darkened>
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-card__title">Title goes here</span>
          <span class="lbz-card__subtitle">Secondary line text Lorem ipsum dolor sit amet</span>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-aspect-ratio--1x1 lbz-card__media">
            <img src="../../assets/img/placeholder@1x1.png">
          </div>
        </div>
      </template>
    </lbz-card>

    <h3 class="lbz-typography--subtitle1">$ disabled: true, false (default)</h3>

    <lbz-card disabled>
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-card__title">Title goes here</span>
          <span class="lbz-card__subtitle">Secondary line text Lorem ipsum dolor sit amet</span>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-aspect-ratio--1x1 lbz-card__media">
            <img src="../../assets/img/placeholder@1x1.png">
          </div>
        </div>
      </template>
      <template #end>
        <div class="lbz-card__actions__buttons">
          <lbz-button disabled>Action 1</lbz-button>
          <lbz-button disabled>Action 2</lbz-button>
        </div>
      </template>
    </lbz-card>

    <h3 class="lbz-typography--subtitle1">$ ripple: undefined (default), true, false</h3>

    <lbz-card ripple>
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-card__title">Title goes here</span>
          <span class="lbz-card__subtitle">Secondary line text Lorem ipsum dolor sit amet</span>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-aspect-ratio--1x1 lbz-card__media">
            <img src="../../assets/img/placeholder@1x1.png">
          </div>
        </div>
      </template>
      <template #end>
        <div class="lbz-card__actions__buttons">
          <lbz-button ripple>Action 1</lbz-button>
          <lbz-button ripple>Action 2</lbz-button>
        </div>
      </template>
    </lbz-card>
    <lbz-card :ripple="false">
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-card__title">Title goes here</span>
          <span class="lbz-card__subtitle">Secondary line text Lorem ipsum dolor sit amet</span>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-aspect-ratio--1x1 lbz-card__media">
            <img src="../../assets/img/placeholder@1x1.png">
          </div>
        </div>
      </template>
      <template #end>
        <div class="lbz-card__actions__buttons">
          <lbz-button :ripple="false">Action 1</lbz-button>
          <lbz-button :ripple="false">Action 2</lbz-button>
        </div>
      </template>
    </lbz-card>

    <h2 class="lbz-typography--h5"># Outlined card</h2>

    <h3 class="lbz-typography--subtitle1">$ type: 'elevated' (default), 'outlined'</h3>

    <lbz-card type="outlined">
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-card__title">Headline 5</span>
          <span class="lbz-card__subtitle">Greyhound divisively hello coldly wonderfully</span>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-aspect-ratio--1x1 lbz-card__media">
            <img src="../../assets/img/placeholder@1x1.png">
          </div>
        </div>
      </template>
      <template #end>
        <div class="lbz-card__actions__buttons">
          <lbz-button>Button</lbz-button>
          <lbz-button>Button</lbz-button>
        </div>
      </template>
    </lbz-card>

    <h3 class="lbz-typography--subtitle1">$ tag: 'div' (default), 'a', 'x'</h3>

    <lbz-card
      tag="a"
      href="#/components/card"
      type="outlined"
    >
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-card__title">Headline 5</span>
          <span class="lbz-card__subtitle">Greyhound divisively hello coldly wonderfully</span>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-aspect-ratio--1x1 lbz-card__media">
            <img src="../../assets/img/placeholder@1x1.png">
          </div>
        </div>
      </template>
      <template #end>
        <div class="lbz-card__actions__buttons">
          <lbz-button>Button</lbz-button>
          <lbz-button>Button</lbz-button>
        </div>
      </template>
    </lbz-card>

    <h3 class="lbz-typography--subtitle1">$ background: 'primary', 'secondary', 'surface' (default), 'error', 'light', 'dark'</h3>

    <lbz-card type="outlined" background="primary">
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-card__title">Headline 5</span>
          <span class="lbz-card__subtitle">Greyhound divisively hello coldly wonderfully</span>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-aspect-ratio--1x1 lbz-card__media">
            <img src="../../assets/img/placeholder@1x1.png">
          </div>
        </div>
      </template>
    </lbz-card>
    <lbz-card type="outlined" background="secondary">
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-card__title">Headline 5</span>
          <span class="lbz-card__subtitle">Greyhound divisively hello coldly wonderfully</span>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-aspect-ratio--1x1 lbz-card__media">
            <img src="../../assets/img/placeholder@1x1.png">
          </div>
        </div>
      </template>
    </lbz-card>
    <lbz-card type="outlined">
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-card__title">Headline 5</span>
          <span class="lbz-card__subtitle">Greyhound divisively hello coldly wonderfully</span>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-aspect-ratio--1x1 lbz-card__media">
            <img src="../../assets/img/placeholder@1x1.png">
          </div>
        </div>
      </template>
    </lbz-card>
    <lbz-card type="outlined" background="error">
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-card__title">Headline 5</span>
          <span class="lbz-card__subtitle">Greyhound divisively hello coldly wonderfully</span>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-aspect-ratio--1x1 lbz-card__media">
            <img src="../../assets/img/placeholder@1x1.png">
          </div>
        </div>
      </template>
    </lbz-card>
    <lbz-card type="outlined" background="light">
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-card__title">Headline 5</span>
          <span class="lbz-card__subtitle">Greyhound divisively hello coldly wonderfully</span>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-aspect-ratio--1x1 lbz-card__media">
            <img src="../../assets/img/placeholder@1x1.png">
          </div>
        </div>
      </template>
    </lbz-card>
    <lbz-card type="outlined" background="dark">
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-card__title">Headline 5</span>
          <span class="lbz-card__subtitle">Greyhound divisively hello coldly wonderfully</span>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-aspect-ratio--1x1 lbz-card__media">
            <img src="../../assets/img/placeholder@1x1.png">
          </div>
        </div>
      </template>
    </lbz-card>

    <h3 class="lbz-typography--subtitle1">$ darkened: true, false (default)</h3>

    <lbz-card
      type="outlined"
      background="primary"
      darkened
    >
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-card__title">Headline 5</span>
          <span class="lbz-card__subtitle">Greyhound divisively hello coldly wonderfully</span>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-aspect-ratio--1x1 lbz-card__media">
            <img src="../../assets/img/placeholder@1x1.png">
          </div>
        </div>
      </template>
    </lbz-card>
    <lbz-card
      type="outlined"
      background="secondary"
      darkened
    >
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-card__title">Headline 5</span>
          <span class="lbz-card__subtitle">Greyhound divisively hello coldly wonderfully</span>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-aspect-ratio--1x1 lbz-card__media">
            <img src="../../assets/img/placeholder@1x1.png">
          </div>
        </div>
      </template>
    </lbz-card>
    <lbz-card
      type="outlined"
      background="error"
      darkened
    >
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-card__title">Headline 5</span>
          <span class="lbz-card__subtitle">Greyhound divisively hello coldly wonderfully</span>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-aspect-ratio--1x1 lbz-card__media">
            <img src="../../assets/img/placeholder@1x1.png">
          </div>
        </div>
      </template>
    </lbz-card>
    <lbz-card
      type="outlined"
      background="light"
      darkened
    >
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-card__title">Headline 5</span>
          <span class="lbz-card__subtitle">Greyhound divisively hello coldly wonderfully</span>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-aspect-ratio--1x1 lbz-card__media">
            <img src="../../assets/img/placeholder@1x1.png">
          </div>
        </div>
      </template>
    </lbz-card>

    <h3 class="lbz-typography--subtitle1">$ disabled: true, false (default)</h3>

    <lbz-card type="outlined" disabled>
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-card__title">Headline 5</span>
          <span class="lbz-card__subtitle">Greyhound divisively hello coldly wonderfully</span>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-aspect-ratio--1x1 lbz-card__media">
            <img src="../../assets/img/placeholder@1x1.png">
          </div>
        </div>
      </template>
      <template #end>
        <div class="lbz-card__actions__buttons">
          <lbz-button disabled>Button</lbz-button>
          <lbz-button disabled>Button</lbz-button>
        </div>
      </template>
    </lbz-card>

    <h3 class="lbz-typography--subtitle1">$ ripple: undefined (default), true, false</h3>

    <lbz-card type="outlined" ripple>
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-card__title">Headline 5</span>
          <span class="lbz-card__subtitle">Greyhound divisively hello coldly wonderfully</span>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-aspect-ratio--1x1 lbz-card__media">
            <img src="../../assets/img/placeholder@1x1.png">
          </div>
        </div>
      </template>
      <template #end>
        <div class="lbz-card__actions__buttons">
          <lbz-button ripple>Button</lbz-button>
          <lbz-button ripple>Button</lbz-button>
        </div>
      </template>
    </lbz-card>
    <lbz-card type="outlined" :ripple="false">
      <template #start>
        <div class="lbz-card__header__center">
          <span class="lbz-typography--overline">Overline</span>
          <span class="lbz-card__title">Headline 5</span>
          <span class="lbz-card__subtitle">Greyhound divisively hello coldly wonderfully</span>
        </div>
        <div class="lbz-card__header__end">
          <div class="lbz-aspect-ratio--1x1 lbz-card__media">
            <img src="../../assets/img/placeholder@1x1.png">
          </div>
        </div>
      </template>
      <template #end>
        <div class="lbz-card__actions__buttons">
          <lbz-button :ripple="false">Button</lbz-button>
          <lbz-button :ripple="false">Button</lbz-button>
        </div>
      </template>
    </lbz-card>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ComponentsCard extends Vue {
  private fclick(e: MouseEvent): void {
    alert(e);
  }
}
</script>
