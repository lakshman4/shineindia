const toastMixin = {
  methods:{
    toast(type, message, position)
    {
      this.$buefy.toast.open({
        duration: 4000,
        message: message,
        position: position,
        type: type,
    })
    },
    confirmCustomDelete() {
      this.$buefy.dialog.confirm({
          title: 'Deleting Post',
          message: 'Are you sure you want to <b>delete</b> your post? This action cannot be undone.',
          confirmText: 'Delete Post',
          type: 'is-danger',
          hasIcon: true,
          onConfirm: () => this.$buefy.toast.open({
            duration:2000,
            message:'Post deleted',
            type:'is-success',
            position:'is-top'

          })
      })
  }
  },
  }
export default toastMixin;
