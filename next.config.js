import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin("./src/i18n.ts");
import { createJiti } from "jiti";
const jiti = createJiti(import.meta.url);

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await jiti.import("./src/env");

/** @type {import("next").NextConfig} */
const config = {};
export default withNextIntl(config);