<template>
  <div>
    <q-btn
      icon="fa-solid fa-bell"
      class="notificationIcon"
      dense
      round
      flat
      @click="visualizeNotifications"
    >
      <q-tooltip>Notificações</q-tooltip>
      <q-badge color="red" floating>{{ notifications.length }}</q-badge>
      <q-menu :offset="[0, 20]" style="width: 25vw; max-height: 500px">
        <q-list bordered class="rounded-borders">
          <q-item-label
            header
            class="text-bold"
            :class="isDarkActive ? 'text-white' : ''"
            >Notificações</q-item-label
          >
          <div
            v-for="(notification, index) in reversedNotificationsArray"
            :key="notification.id"
          >
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <div class="col items-center justify-center q-gutter-y-sm">
                  <q-avatar
                    :color="isDarkActive ? 'white' : 'dark'"
                    :text-color="isDarkActive ? 'dark' : 'white'"
                    >S</q-avatar
                  >
                  <div class="text-weight-bold">
                    {{ notification.sent_by }}
                  </div>
                </div>
              </q-item-section>
              <q-item-section>
                <q-item-label lines="1" class="text-weight-bold">
                  {{ notification.title }}
                </q-item-label>
                <q-item-label class="text-weight-light" lines="4">
                  {{ notification.message }}
                </q-item-label>
              </q-item-section>
              <q-separator vertical inset />
              <q-item-section side style="width: 30%" class="row">
                <q-item-section top class="q-mb-sm">
                  {{ notificationTimeDisplay(notification.created_at) }}
                </q-item-section>
                <div class="self-end full-width">
                  <q-btn
                    class="full-width"
                    v-if="notification.button_route"
                    :to="notification.button_route"
                    color="primary"
                    dense
                  >
                    {{ notification.button_label }}
                  </q-btn>
                </div>
              </q-item-section>
            </q-item>
            <q-separator v-if="index !== notifications.length - 1" />
          </div>
        </q-list>
      </q-menu>
    </q-btn>
  </div>
</template>
<script lang="ts" src="./index.ts" />
