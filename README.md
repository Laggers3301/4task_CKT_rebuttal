# Anonymous supplementary demo

A dependency-free static site suitable for GitHub Pages. It intentionally contains no names, affiliations, analytics, or external media hosts.

## Add your material

1. Put MP4 files in `assets/videos/`, then add their paths in `script.js`.
2. Replace the `—` values for `s1`, `s2`, `s3`, and `n` in `script.js` with audited stage-wise results.
3. Review every clip for identifying information before publishing: faces, voices, badges, lab signs, device hostnames, filenames, metadata, and Git history.
4. Preview locally with `python3 -m http.server 8000`, then open `http://localhost:8000`.

## Video plan

The page currently uses fifteen distinct representative video files and summarizes the full 180-trial evaluation:

- 6 complete, uncut success rollouts
- 9 representative failure clips (six clothes-folding and three cube-catching failures)

Fifteen videos is the current representative set. The tables report the full trial ledger supplied by the authors; add further videos only when they are de-identified and indexed against that ledger. Do not fabricate failure rates or comparison results.

## Publish anonymously

Create a fresh anonymous GitHub account/repository, upload only this directory and de-identified assets, and enable **Settings → Pages → Deploy from a branch**. The resulting `*.github.io` URL can be included in the rebuttal if the conference policy permits external supplementary material.

Use no repository description, commit messages, image/video metadata, or links that reveal authorship. If this repository was ever associated with an identifiable account, recreate it from a clean copy before publishing.
