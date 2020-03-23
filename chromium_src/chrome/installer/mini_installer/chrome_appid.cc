/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

#include "chrome/installer/mini_installer/appid.h"

namespace google_update {

#if defined(OFFICIAL_BUILD)
const wchar_t kAppGuid[] = L"{0C12B489-0B55-4F8B-8EB7-640256ADBE54}";
const wchar_t kMultiInstallAppGuid[] =
    L"{DA2C89DD-D3D6-4E1C-9534-27E0F66759A1}";
const wchar_t kBetaAppGuid[] = L"{911586F3-317E-4498-868B-26BFCBD4F5FB}";
const wchar_t kDevAppGuid[] = L"{2F0CC5B2-B924-40EA-A441-175E25CD51AA}";
const wchar_t kSxSAppGuid[] = L"{7D06B97B-CBC7-49E6-8440-4A6750F016A6}";
#else
const wchar_t kAppGuid[] = L"";
const wchar_t kMultiInstallAppGuid[] = L"";
#endif

}  // namespace google_update
