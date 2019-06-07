/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

#include "chrome/installer/mini_installer/appid.h"

namespace google_update {

#if defined(OFFICIAL_BUILD)
const wchar_t kAppGuid[] = L"{8FCD959A-16B8-400C-ADBC-077451B7A411}";
const wchar_t kMultiInstallAppGuid[] =
    L"{723F8A40-9CA7-4768-A082-BABA9D06CA36}";
const wchar_t kBetaAppGuid[] = L"{983523CC-103F-4DCD-9EC0-9C86CBE984EB}";
const wchar_t kDevAppGuid[] = L"{F7F4448A-11D3-41A4-B2F1-B83D9D7674C3}";
const wchar_t kSxSAppGuid[] = L"{76ECE663-DC7E-4F11-8C47-86BFE6E6B5A8}";
#else
const wchar_t kAppGuid[] = L"";
const wchar_t kMultiInstallAppGuid[] = L"";
#endif

}  // namespace google_update
