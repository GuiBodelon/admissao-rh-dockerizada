import { defineComponent, ref, onMounted, computed } from 'vue';
import { apiBackendLaravel } from 'boot/axios';
import { useUserStore } from 'src/stores/user-store';
import { useAppStore } from 'src/stores/app-store';
export default defineComponent({
  name: 'Notifications',

  setup() {
    const appStore = useAppStore();
    const userStore = useUserStore();
    const userId = userStore.user.id;
    const userPermission = userStore.user.permissions;
    const token = userStore.user.token;
    let notificationsVisualized = userStore.user.notificationsVisualized;
    const notifications = ref([{
      id: '',
      sent_by: '',
      receiver_id: '',
      visible_to_permissions: '',
      title: '',
      message: '',
      button_route: '',
      button_label: '',
      created_at: new Date,
      updated_at: new Date,
    }]);
    function getNotifications() {
      const payload = {
        user_id: userId, //Podendo ser nulo, caso a coluna esteja preenchida no banco de dados, a notificação será visivel para apenas um usuário
        user_permission: userPermission, //Podendo ser nulo aso a coluna esteja preenchida no banco de dados, a notificação será visivel pra um conjunto de users com a mesma permissão
      }
      apiBackendLaravel
        .get('/notifications', {
          params: payload,
          headers: {
            Authorization: 'Bearer ' + token,
          },
        })
        .then((response) => {
          notifications.value = response.data
        })
    }

    function visualizeNotifications() {
      userStore.changeNotificationsVisualized(true)
      notificationsVisualized = userStore.user.notificationsVisualized;
    }

    function notificationTimeDisplay(created_at: string): string {
      const now = new Date();
      const createdAt = new Date(created_at.replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$2-$1'));
      const timeDiff = now.getTime() - createdAt.getTime();

      const hours = Math.floor(timeDiff / (1000 * 60 * 60));
      const days = Math.floor(hours / 24);
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

      if (hours === 0) {
        return `${minutes} min. atrás`;
      } else if (hours < 24) {
        return `${hours}${hours > 1 ? ' hrs ' : ' hr '}${minutes} min. atrás`;
      } else {
        return `${days}${days > 1 ? ' dias ' : ' dia '}${hours % 24}${hours % 24 > 1 ? ' hrs ' : ' hr '}${minutes} min. atrás`;
      }
    }

    const reversedNotificationsArray = computed(() => notifications.value.slice().reverse());

    onMounted(() => {
      getNotifications()
    })

    return {
      userStore,
      getNotifications,
      notifications,
      reversedNotificationsArray,
      notificationsVisualized,
      visualizeNotifications,
      notificationTimeDisplay,
      isDarkActive: computed(() => appStore.isDarkActive),
    }
  },
});
