import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-base-100 rounded-box shadow-base-300/20 shadow-sm px-4">
        <div className="flex w-full items-center justify-between">
          {/* KIRI: Logo */}
          <div className="flex items-center">
            <a
              className="link text-base-content link-neutral text-xl font-bold no-underline"
              href="#"
            >
              FlyonUI
            </a>
          </div>

          {/* TENGAH: Search */}
          <div className="hidden md:flex items-center rounded-full max-w-md w-full bg-base-200 px-4 py-2">
            <span className="icon-[tabler--search] text-base-content/80 me-3 size-5 shrink-0"></span>
            <label className="sr-only" htmlFor="searchInput">
              Search
            </label>
            <input
              type="search"
              className="grow bg-transparent outline-none"
              placeholder="Search"
              id="searchInput"
            />
          </div>

          {/* KANAN: Avatar Dropdown */}
          <div className="flex items-center gap-4">
            {/* Tombol search kecil (untuk mobile) */}
            <button className="btn btn-sm btn-text btn-circle size-8.5 md:hidden">
              <span className="icon-[tabler--search] size-5.5"></span>
            </button>

            {/* Avatar Dropdown */}
            <div className="dropdown relative inline-flex [--auto-close:inside] [--offset:8] [--placement:bottom-end]">
              <button
                id="dropdown-scrollable"
                type="button"
                className="dropdown-toggle flex items-center"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="Dropdown"
              >
                <div className="avatar">
                  <div className="size-9.5 rounded-full">
                    <img
                      src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png"
                      alt="avatar 1"
                    />
                  </div>
                </div>
              </button>
              <ul
                className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="dropdown-avatar"
              >
                <li className="dropdown-header gap-2">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img
                        src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png"
                        alt="avatar"
                      />
                    </div>
                  </div>
                  <div>
                    <h6 className="text-base-content text-base font-semibold">
                      John Doe
                    </h6>
                    <small className="text-base-content/50">Admin</small>
                  </div>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <span className="icon-[tabler--user]"></span>
                    My Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <span className="icon-[tabler--settings]"></span>
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <span className="icon-[tabler--receipt-rupee]"></span>
                    Billing
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <span className="icon-[tabler--help-triangle]"></span>
                    FAQs
                  </a>
                </li>
                <li className="dropdown-footer gap-2">
                  <a className="btn btn-error btn-soft btn-block" href="#">
                    <span className="icon-[tabler--logout]"></span>
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
