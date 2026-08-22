/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "megawrench",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    // Create a CloudFront distribution to route traffic based off the endpoint path.
    const router = new sst.aws.Router("MegaWrenchRouter", {
      domain:
        $app.stage === "production"
          ? {
              name: "megawrench.com",
              redirects: ["www.megawrench.com"],
              dns: sst.cloudflare.dns(),
            }
          : undefined,
    });

    // Deploying the apps onto the CloudFront distribution.
    new sst.aws.Nextjs("MegaWrenchDefaultSite", {
      path: "./apps/marketing/",
      router: { instance: router },
    });

    // Deploying the dashboard onto the CloudFront distribution.
    new sst.aws.Nextjs("MegaWrenchDashboardSite", {
      path: "./apps/dashboard/",
      router: { instance: router, path: "/dashboard" },
    });
  },
});
