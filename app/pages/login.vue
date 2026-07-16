<script setup lang="ts">
import { Eye, EyeOff, Lock, User } from "@lucide/vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

definePageMeta({
  layout: false,
  title: "Sign in"
});

useSeoMeta({
  title: "Sign in - Susi Air Operations Tool",
  ogTitle: "Sign in - Susi Air Operations Tool",
});

const router = useRouter();
const username = ref("");
const password = ref("");
const showPassword = ref(false);
const isLoading = ref(false);

const handleLogin = () => {
  if (!username.value || !password.value) return;

  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    router.push("/");
  }, 500);
};
</script>

<template>
  <div
    class="min-h-screen bg-surface flex flex-col justify-start items-center px-5 pt-20"
  >
    <div class="w-full max-w-md flex flex-col gap-4">
      <NuxtImg src="/android-chrome-512x512.png" class="size-20" />
      <h1 class="text-[22px] font-bold tracking-tight text-primary">Sign in</h1>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <UiInput
          id="username"
          type="text"
          name="username"
          label="Username"
          v-model="username"
          placeholder="e.g. Jhon Doe"
        >
          <template #left>
            <User class="w-4 h-4 stroke-[1.75px]" />
          </template>
        </UiInput>

        <UiInput
          id="password"
          :type="showPassword ? 'text' : 'password'"
          name="password"
          label="Password"
          v-model="password"
          placeholder="••••••••"
        >
          <template #left>
            <Lock class="w-4 h-4 stroke-[1.75px]" />
          </template>
          <template #right>
            <button
              type="button"
              @click="showPassword = !showPassword"
              aria-label="ShowPassword"
            >
              <component
                :is="showPassword ? EyeOff : Eye"
                class="w-4 h-4 stroke-[1.75px]"
              />
            </button>
          </template>
        </UiInput>

        <div class="pt-2">
          <UiButton
            type="submit"
            variant="primary"
            class="w-full"
            :disabled="isLoading"
            :loading="isLoading"
          >
            Sign in
          </UiButton>
        </div>
      </form>

      <div class="text-center mt-6 pt-4 border-t border-background">
        <p class="text-[11px] text-secondary leading-relaxed">
          Authorized personnel only. All operational activities inside this
          dispatch portal are logged under aviation safety regulations.
        </p>
      </div>
    </div>
  </div>
</template>
