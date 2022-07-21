<template>
  <section class="worked section">
    <h2 class="worked__title">{{ title }}</h2>
    <p class="worked__intro">{{ intro }}</p>
    <div class="tabs">
      <aside class="tabs__side">
        <ul>
          <li
            v-for="(tab, i) in tabs"
            :key="i"
            class="tab"
            :class="{ 'tab--selected': index == activeTab }"
            @click="activeTab = i"
          >
            {{ tab.company }}
          </li>
        </ul>
      </aside>
      <div v-for="(tab, i) in tabs" :key="i" class="tabs__content">
        <div v-if="i === activeTab">
          <h3>
            {{ tab.job }}<small>{{ tab.date }}</small>
          </h3>
          <p>{{ tab.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WorkedSection',
  data() {
    return {
      activeTab: 0,
      title: 'Where I’ve Worked',
      intro:
        'Since graduating at Aberystwyth University I have been very fortunate to work at many great places in my developer career. Below are some of the places I have worked at.',
      tabs: [
        {
          company: 'Cisco',
          job: 'User Experience Engineer - UI Engineer (Front-end)',
          date: 'August 2021 - Present',
          role: 'At Textlocal I use Figma to design UI changes to the company web application and after approval develop, changes along with my front-end manager. I work closely with back-end development, dev-ops, and QA testing teams to produce excellent, bug-free development updates for clients and users.\nI also regularly use Alpine JS to create interactive UI components. After coding a new layout or component I use Atlassian Crucible to create and perform code reviews.\nAs well as designing and developing front-end layout and components I also make minor PHP changes to link the code from the back-end team with the front-end code. When coding in PHP I always use PSR12 standards to make clean re-usable code.\nI work in an agile development process using sprints with technologies such as JavaScript (Vanilla & jQuery), Gulp, Docker, Jira, Git, BitBucket, and Sequel Pro DB client. Technologies I will soon be working with are Vue.js, TypeScript and some Laravel.',
        },
        {
          company: 'Textlocal',
          job: 'UI Developer',
          date: 'July 2020 - August 2021',
          role: 'At Textlocal I use Figma to design UI changes to the company web application and after approval develop, changes along with my front-end manager. I work closely with back-end development, dev-ops, and QA testing teams to produce excellent, bug-free development updates for clients and users.\nI also regularly use Alpine JS to create interactive UI components. After coding a new layout or component I use Atlassian Crucible to create and perform code reviews.\nAs well as designing and developing front-end layout and components I also make minor PHP changes to link the code from the back-end team with the front-end code. When coding in PHP I always use PSR12 standards to make clean re-usable code.\nI work in an agile development process using sprints with technologies such as JavaScript (Vanilla & jQuery), Gulp, Docker, Jira, Git, BitBucket, and Sequel Pro DB client. Technologies I will soon be working with are Vue.js, TypeScript and some Laravel.',
        },
        {
          company: 'Kubix Media',
          job: 'Developer - Senior Developer',
        },
        {
          company: 'Gough Bailey Wright',
          job: 'Front-end Developer',
        },
        {
          company: 'UoB Guild of Students',
          job: 'Website CoOrdinator',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.worked {
  text-align: center;
  &__companies {
    text-align: left;
    li {
      list-style-image: none !important;
    }
  }
  &__desc {
    text-align: left;
  }
}
</style>
