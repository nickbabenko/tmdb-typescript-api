import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/observable/from';

export class Helper {

	/**
	 * Returns an Observable from an AJAX call
	 * @param url
	 * @returns {Observable}
	 */
	public static ajaxObservable(url) {
		var observable;
		if (typeof module !== 'undefined' && module.exports) {
    			observable = rx.Observable.create(function (observer) {
				request(url, function (error, response, body) {
					if (error) { observer.onError(); }
					else { observer.onNext({response: response, body: body }); }
					observer.onCompleted();
				})
			});
		} else {
			observable = Observable.ajax({
			    url: url,
			    crossDomain: true
			});
		}
		return observable.map(ajax => {
		    return ajax.response;
		});
	}

}
