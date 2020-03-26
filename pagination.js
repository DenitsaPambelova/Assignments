class Pagination {

    constructor(items, pageSize) {
        this.items = items;
        this.pageSize = pageSize || 1;

        this.totalPages = Math.ceil(items.length / pageSize);
        this.currentPage = 1;

    };

    firstPage() {
        this.currentPage = 1;
    };

    lastPage() {
        return this.currentPage = this.totalPages;
    };

    nextPage() {
       // if (!this.lastPage()) {
            this.currentPage++;
       // }
    };

    prevPage() {
        //if (!this.firstPage())
            this.currentPage--;
            //
    };
    goToPage(page) {
        this.currentPage = page;
    };

    getVisibleItems  () {
        var page = [];
        var i = this.pageSize * (this.currentPage - 1);
        var c = this.pageSize * this.currentPage;
        c = (c > this.items.length) ? this.items.length : c;
        for (; i < c; i++) {
            page.push(this.items[i]);
        }
        return page;
    }
}
    const sampleDataSet = ['foo','Public','moratorium','pricing','directional','project','Right','multimedia','real','knowledge','orchestration','access','Compatible','interface','encoding','extranet','actuating','algorithm','initiative','data','attitude','initiative','projection','Quality','focus','Up','Synergistic','time','tangible','grid','grid-enabled','challenge','Upgradable','artificial','structure','superstructure','transitional','superstructure','Multi','asynchronous','empowering','Reactive','Distributed','contextually','5th','Public','modular','time','optimizing','non','discrete','Object','archive','core','initiative','multimedia','Extended','support','analyzer','software','productivity','Open','focus','Business','bottom','non','multi','Realigned','stable','next','protocol','next','Extended','value','Future','upward','intranet','circuit','Universal','Progressive','challenge','Organic','reciprocal','neural','maximized','task','exuding','benchmark','matrix','Implemented','systemic','attitude','parallelism','function','middleware','Managed','migration','Grass','emulation','Switchable','Organized'];
    const pagination = new Pagination(sampleDataSet, 5);

console.log(pagination.getVisibleItems()); // ['foo','Public','moratorium','pricing','directional']
console.log(pagination.nextPage());
console.log(pagination.getVisibleItems()); // ['project','Right','multimedia','real','knowledge']
console.log(pagination.goToPage(3));
console.log(pagination.getVisibleItems()); // ['orchestration', 'access', 'Compatible', 'interface', 'encoding']
console.log(pagination.prevPage());
console.log(pagination.getVisibleItems()); // ['project','Right','multimedia','real','knowledge']
console.log(pagination.firstPage());
console.log(pagination.getVisibleItems()); // ['foo','Public','moratorium','pricing','directional']
console.log(console.log(pagination.lastPage()));
console.log(pagination.getVisibleItems()); // ['Organized']
