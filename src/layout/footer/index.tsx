import { defineComponent } from 'vue';

import { GithubOutlined, CopyrightOutlined } from '@ant-design/icons-vue';
import { Layout } from 'ant-design-vue';
import styles from './index.module.less';

const { Footer: ALayoutFooter } = Layout;

export default defineComponent({
  name: 'PageFooter',
  components: { ALayoutFooter },
  setup() {
    return () => (
      <>
        <a-layout-footer class={styles.page_footer}>
          <div class={styles.page_footer_link}>
            <a href="https://buqiyuan.github.io/vite-vue3-admin" target="_blank">
              在线预览
            </a>
            <a href="https://github.com/buqiyuan/vite-vue3-admin" target="_blank">
              <GithubOutlined />
            </a>
            <a href="https://buqiyuan.github.io/vite-vue3-admin-docs/" target="_blank">
              在线文档
            </a>
          </div>
          <div class={styles.copyright}>
            Copyright <CopyrightOutlined /> 2022 vite-vue3-admin
          </div>
        </a-layout-footer>
      </>
    );
  },
});
