/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

#pragma once

#include <string>

#include "export.h"

namespace event_type {

ADS_EXPORT enum NotificationResultInfoResultType {
  CLICKED,
  DISMISSED,
  TIMEOUT
};

ADS_EXPORT struct NotificationResultInfo {
  std::string id;
  NotificationResultInfoResultType result_type;
  std::string catalog;
  std::string url;
  std::string classification;
};

}  // namespace event_type
