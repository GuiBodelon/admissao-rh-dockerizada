
import { defineComponent, ref, onMounted, computed } from 'vue';
import { apiBackendLaravel } from 'boot/axios';
import { useUserStore } from 'src/stores/user-store';
import { useAppStore } from 'src/stores/app-store';
import Menus from 'src/interfaces/IMenus';
//Import vue-sidebar-menu https://yaminncco.github.io/vue-sidebar-menu/#/
import { SidebarMenu } from 'vue-sidebar-menu';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';

export default defineComponent({
  name: 'SideBar',

  components: {
    SidebarMenu,
  },

  setup(props, { emit }) {
    const appStore = useAppStore();
    const userStore = useUserStore();
    const token = userStore.user.token;
    const menuList = ref<Menus[]>([]);
    const filteredMenus = ref<Menus[]>([]);
    const activeLeft = ref('348px');
    const isToggled = ref(false);
    const activeLogo = ref('default');
    const activeLogoWidth = ref('30%');
    const activeLogoPath = ref('/imgs/logo-report-dark.svg');
    const loadingSidebar = ref(false);

    const toggleSidebar = () => {
      isToggled.value = !isToggled.value;
      if (isToggled.value) {
        activeLogo.value = 'mobile';
        activeLogoWidth.value = '60%';
        //activeLogoPath.value = 'more_vert';
        activeLeft.value = '65px';
        emit('toggle', activeLeft.value);
      } else {
        activeLogo.value = 'default';
        activeLogoWidth.value = '30%';
        //activeLogoPath.value = '/imgs/logo-report-dark.svg';
        activeLeft.value = '348px';
        emit('toggle', activeLeft.value);
      }
    };

    async function getMenus() {
      loadingSidebar.value = true;
      await apiBackendLaravel
        .get('/menus', {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        })
        .then((response) => {
          menuList.value = response.data;
          const userPermissions = userStore.user.permissions;
          //Realiza a primeira onda de filtro nos Menus pais
          filteredMenus.value = menuList.value.filter((item) =>
            item.visible_to_permissions.some(
              (permission: any) => permission.permission === userPermissions
            )
          );
          //Realiza o filtro recursivamente em seus respectivos filhos
          filteredMenus.value = filterDataRecursively(
            filteredMenus.value,
            userPermissions
          );
        })
        .finally(() => {
          loadingSidebar.value = false;
        });
    }

    function filterDataRecursively(data: any[], permissions: string) {
      return data.filter((item) => {
        let visible = false;
        item.visible_to_permissions.forEach((permission: any) => {
          if (permissions.includes(permission.permission)) {
            visible = true;
          }
        });
        if (item.child) {
          item.child = filterDataRecursively(item.child, permissions);
        }
        return visible || item.child;
      });
    }

    onMounted(() => {
      getMenus();
    });

    return {
      toggleSidebar,
      activeLeft,
      getMenus,
      menuList,
      filteredMenus,
      activeLogoWidth,
      activeLogoPath,
      activeLogo,
      loadingSidebar,
      isDarkActive: computed(() => appStore.isDarkActive),
    };
  },
});
