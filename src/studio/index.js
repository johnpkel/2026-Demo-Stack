"use client";
import { Stack } from "@/lib/contentstack-client";
import { studioSdk } from "@contentstack/studio-react";
import "./register-components";
import "./register-design-tokens";

studioSdk.init({
  stackSdk: Stack,
});
