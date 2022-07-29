/*
 * SPDX-FileCopyrightText: Copyright © 2020-2022 Serpent OS Developers
 *
 * SPDX-License-Identifier: Zlib
 */

/**
 * summit.web
 *
 * Root for all Web UI
 *
 * Authors: Copyright © 2020-2022 Serpent OS Developers
 * License: Zlib
 */

module summit.web;

import vibe.d;

import summit.web.projects;

/**
 * Web interface providing the UI experience
 */
@path("/") public final class Web
{
    void configure(URLRouter root) @safe
    {
        root.registerWebInterface(new ProjectsWeb());
    }

    /**
     * Render the home page
     */
    void index()
    {
        render!("index.dt");
    }
}
