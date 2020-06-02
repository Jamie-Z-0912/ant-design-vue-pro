<template>
  <a-card
    :loading="tree_loading"
    :bordered="false"
    :body-style="{padding: '0', minHeight: '600px'}"
  >

    <a-row>
      <a-col
        :sm="4"
        :md="6"
      >
        <Tree
          :dataSource="tree_data"
          :openKey="select_org"
          :search="false"
        ></Tree>
      </a-col>
      <a-col
        :sm="20"
        :md="18"
      >
        <a-card
          :loading="detail_loading"
          :bordered="false"
          :body-style="{padding: '0'}"
        >
          <div class="">
            <a-row>
              <a-col :span="12">科室图片</a-col>
              <a-col :span="12">科室信息</a-col>
            </a-row>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </a-card>
</template>

<script>
import { Tree } from '@/components'
import { baseMixin } from '@/store/app-mixin'

export default {
  name: 'Organization',
  mixins: [baseMixin],
  components: {
    Tree
  },
  data: function() {
    return {
      select_org: 0,
      tree_loading: true,
      detail_loading: true
    }
  },
  computed: {
    tree_data() {
      return this.$store.state.organization.treeData
    },
    detail_data() {
      return this.$store.state.organization.detailData
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      const { dispatch } = this.$store
      dispatch({ type: 'organization/getInit' }).then(() => {
        this.tree_loading = false
        dispatch({ type: 'organization/getDetail', params: { id: 0 } }).then(() => (this.detail_loading = false))
      })
    }
  }
}
</script>

<style>
</style>
