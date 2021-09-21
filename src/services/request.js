import {
	axiosGet,
	axiosPost
} from '../lib/http.js'

function getDayData(date) {
	return new Promise((res, rej) => {
		axiosPost({
			url: '/api/calendar/day',
			data: {
				date
			},
			success(data) {
				res(data)
			},
			fail(error) {
				rej(error)
			}
		})
	})
}

function getMonthData(yearMonth) {
	return new Promise((res, rej) => {
		axiosPost({
			url: '/api/calendar/month',
			data: {
				'year-month': yearMonth
			},
			success(data) {
				res(data)
			},
			fail(error) {
				rej(error)
			}
		})
	})
}


function getYearData(year) {
	return new Promise((res, rej) => {
		axiosPost({
			url: '/api/calendar/year',
			data: {
				year
			},
			success(data) {
				res(data)
			},
			fail(error) {
				rej(error)
			}
		})
	})
}
export {
	getDayData,
	getYearData,
	getMonthData
}
