# Mount Elizabeth Theatre — Netlify website

This is the Mount Elizabeth Theatre website source. It includes the home page, calendar, individual event pages, theatre specifications, images, and contact information. The mobile home-page copy overlays the hero photo.

## Build

- Build command: `node scripts/build.mjs`
- Publish directory: `dist`
- Node.js 20 or later; no package install is required.
- `content/site.json` holds the text and event data. Run `npm run build` after changing it.
- Uploaded images and files live in `static/uploads`; the build copies them to `/uploads`.

## Enable the editor at /admin/

The admin source is configured for Decap CMS with GitHub sign-in. A manual drag-and-drop deploy cannot publish edits: the editor writes to a Git repository, and Netlify must rebuild from that repository. Until the connection exists, `/admin/` displays a setup message rather than a broken login.

1. Put **the contents of this project folder** in a GitHub repository on its `main` branch. Grant editor accounts write access to that repository.
2. Link the **existing Netlify site** to the repository and set build command `node scripts/build.mjs`, publish directory `dist`. Check that the existing custom domains remain attached to the same Netlify site.
3. Set Netlify environment variable `MET_CMS_REPO` to the exact `owner/repository` (for example, `mountelizabeththeatre/website`). Redeploy.
4. Create a GitHub OAuth app with homepage `https://metconcerts.com` and callback `https://api.netlify.com/auth/done`. In Netlify's site configuration, install GitHub as an OAuth authentication provider using that app's client ID and secret. Keep the secret in Netlify/GitHub settings, never in this repository.
5. Visit `https://metconcerts.com/admin/`, log in with a GitHub account with repo write access, edit and publish content. Check that the commit triggers a successful Netlify deploy and the live page updates.

The editor covers hero text and image, About, contact, events, YouTube clips, optional ticket links, theatre photos, specs, downloads and team. Event URLs use the event's unique lowercase slug. Event month and day are derived from its date at build time. Images and files uploaded in the editor are committed under `static/uploads`.

The private ChatGPT preview uses a separate database and sign-in. It is not synchronized with this Git-backed editor. Existing optional event ticket URLs may still point at legacy Wix event pages; those links remain hidden unless the editor enables the ticket button for the event.
