# FROM codeceptjs/codeceptjs
# FROM mcr.microsoft.com/playwright:v1.24.1
FROM node:16

# Install dependencies - https://github.com/ianwalter/playwright-container/blob/main/Dockerfile
# 1. Install WebKit dependencies.
RUN apt-get update && apt-get install -y --no-install-recommends \
    iputils-ping \
    libwoff1 \
    libopus0 \
    libwebp6 \
    libwebpdemux2 \
    libenchant1c2a \
    libgudev-1.0-0 \
    libsecret-1-0 \
    libhyphen0 \
    libgdk-pixbuf2.0-0 \
    libegl1 \
    libnotify4 \
    libxslt1.1 \
    libevent-2.1-6 \
    libgles2 \
    libvpx5 \
    libxcomposite1 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libepoxy0 \
    libgtk-3-0 \
    libharfbuzz-icu0

# 2. Install gstreamer and plugins to support video playback in WebKit.
RUN apt-get update && apt-get install -y --no-install-recommends \
    libgstreamer-gl1.0-0 \
    libgstreamer-plugins-bad1.0-0 \
    gstreamer1.0-plugins-good \
    gstreamer1.0-libav

# 3. Install Chromium dependencies.
RUN apt-get update && apt-get install -y --no-install-recommends \
    libnss3 \
    libxss1 \
    libasound2 \
    fonts-noto-color-emoji \
    libxtst6

# 4. Install Firefox dependencies.
RUN apt-get update && apt-get install -y --no-install-recommends \
    libdbus-glib-1-2 \
    libxt6

# 5. Install ffmpeg to bring in audio and video codecs necessary for playing
#    videos in Firefox.
RUN apt-get update && apt-get install -y --no-install-recommends \
    ffmpeg

# 6. (Optional) Install XVFB if there's a need to run browsers in headful mode.
RUN apt-get update && apt-get install -y --no-install-recommends \
    xvfb

WORKDIR /app

COPY . .

RUN npm i --location=global pm2
# https://github.com/npm/cli/issues/2011 - npm ci is super slow
# RUN mkdir node_modules && npm ci
RUN npm i

EXPOSE 8080

CMD ["pm2-runtime", "start", "ecosystem.config.js"]
