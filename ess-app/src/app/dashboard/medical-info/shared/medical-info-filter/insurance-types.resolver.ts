import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { ENDPOINT } from './../../../../core/constant/index';
import { SearchFilterService } from './../../../../shared/search-filter/search-filter.service';

@Injectable()
export class InsuranceTypesResolve implements Resolve<any> {

  constructor(private searchFilterService: SearchFilterService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.searchFilterService.fetchFilter(ENDPOINT.FILTERS.INSURANCE_TYPES);
  }

}
