import {Component, OnInit} from "@angular/core";
import {WelcomeCardComponent, SearchInputCardComponent} from "./shared/index";
import {ApiDataService} from "../../services/api-data.service";
import {SearchResult} from "../../models/search-result.model";
import {SearchResultTableComponent} from "./shared/search-result-table/search-result-table.component";

@Component({
    moduleId: module.id,
    selector: 'ss-app-main-content',
    templateUrl: 'main-content.component.html',
    styleUrls: ['main-content.component.css'],
    directives: [WelcomeCardComponent, SearchInputCardComponent, SearchResultTableComponent]
})
export class MainContentComponent implements OnInit {
    searchResults: SearchResult[] = null;
    noResults: templateUrl = null;
    searchError: templateUrl = null;

    constructor(private apiDataService: ApiDataService) {
    }

    ngOnInit() {
    }

    performSearchQuery(query: {searchTerm: string, queryType: string}) {
        this.searchResults = null;

        this.apiDataService.performSearchRequest(query.searchTerm, query.queryType).then(resultObject => {
            this.searchResults = resultObject;
            console.log(this.searchResults);
            /* TODO * BONUS * wire up "no search results"
             enter main-content.component.html and add some HTML that would be our "no results found" element
             There is a "no-results" class for you to use, feel free to use your own or improve upon the one in existence
             */
             if(this.searchResults == null){
                this.noResults = `<div class="no-results">No Results Found</div>`;
            }
        }, error => {
            console.log(error);
            if (error == "To be completed!")
                alert("Error, not yet wired up!");
            else {
                alert(error);
                /* TODO * BONUS * do something about this error
                 enter main-content.component.html and add some HTML that would be our error message element
                 There is a "search-error" class for you to use, feel free to use your own or improve upon the one in existence
                */
                this.searchError = `<div class="search-error">${error}</div>`;
            }
        });
    }

}
