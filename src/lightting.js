(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var beat = 60e3 / 140;

var progress = function progress() {
	return new Date() % beat / beat;
};

var colour = function colour(fraction) {
	var bitten = Math.round(fraction * 255).toString(16);

	return '#' + bitten + bitten + bitten;
};

var states = {
	0: {
		children: 'HM',
		attrs: {
			style: {
				'color': 'white',
				'display': 'inline',
				'font-size': '360px'
			}
		}
	},
	1: {
		children: 'TZSCH',
		attrs: {
			style: {
				'color': 'black',
				'display': 'inline',
				'font-size': '140px'
			}
		}
	}
};

var body = cito.vdom.create({
	tag: 'body'
});

document.documentElement.replaceChild(body.dom, document.body);

var pulse = function pulse() {
	var beatFraction = progress();

	cito.vdom.update(body, {
		tag: 'body',
		attrs: {
			style: {
				'background-color': colour(beatFraction),
				'font-family': 'monospace',
				'line-height': '0',
				'position': 'fixed',
				'text-align': 'center',
				'top': '50%',
				'width': '100%'
			}
		},
		children: _extends({
			tag: 'h1'
		}, states[Math.round(beatFraction)])
	});
};

var loop = function loop() {
	pulse();

	requestAnimationFrame(loop);
};

loop();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9iYXJuZXkvZ2l0L2xpZ2h0dGluZy9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FDQUEsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQTs7QUFFckIsSUFBTSxRQUFRLEdBQUcsU0FBWCxRQUFRO1FBQ2IsQUFBRSxJQUFJLElBQUksRUFBRSxHQUFHLElBQUksR0FBSyxJQUFJO0NBQUEsQ0FBQTs7QUFFN0IsSUFBTSxNQUFNLEdBQUssU0FBWCxNQUFNLENBQUssUUFBUSxFQUFJO0FBQzVCLEtBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUUsUUFBUSxHQUFHLEdBQUcsQ0FBRSxDQUFDLFFBQVEsQ0FBRSxFQUFFLENBQUUsQ0FBQTs7QUFFMUQsUUFBTyxHQUFHLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUE7Q0FDckMsQ0FBQTs7QUFFRCxJQUFJLE1BQU0sR0FBSTtBQUNiLEVBQUMsRUFBRztBQUNILFVBQVEsRUFBRyxJQUFJO0FBQ2YsT0FBSyxFQUFFO0FBQ04sUUFBSyxFQUFHO0FBQ1AsV0FBTyxFQUFPLE9BQU87QUFDckIsYUFBUyxFQUFLLFFBQVE7QUFDdEIsZUFBVyxFQUFHLE9BQU87SUFDckI7R0FDRDtFQUNEO0FBQ0QsRUFBQyxFQUFHO0FBQ0gsVUFBUSxFQUFHLE9BQU87QUFDbEIsT0FBSyxFQUFHO0FBQ1AsUUFBSyxFQUFHO0FBQ1AsV0FBTyxFQUFPLE9BQU87QUFDckIsYUFBUyxFQUFLLFFBQVE7QUFDdEIsZUFBVyxFQUFHLE9BQU87SUFDckI7R0FDRDtFQUNEO0NBQ0QsQ0FBQTs7QUFFRCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBRTtBQUM5QixJQUFHLEVBQUcsTUFBTTtDQUNaLENBQUUsQ0FBQTs7QUFFSCxRQUFRLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBRSxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUUsQ0FBQTs7QUFFaEUsSUFBTSxLQUFLLEdBQU0sU0FBWCxLQUFLLEdBQVk7QUFDdEIsS0FBTSxZQUFZLEdBQUcsUUFBUSxFQUFFLENBQUE7O0FBRy9CLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFFLElBQUksRUFBRTtBQUN2QixLQUFHLEVBQUssTUFBTTtBQUNkLE9BQUssRUFBRztBQUNQLFFBQUssRUFBRztBQUNQLHNCQUFrQixFQUFHLE1BQU0sQ0FBRSxZQUFZLENBQUU7QUFDM0MsaUJBQWEsRUFBUSxXQUFXO0FBQ2hDLGlCQUFhLEVBQVEsR0FBRztBQUN4QixjQUFVLEVBQVcsT0FBTztBQUM1QixnQkFBWSxFQUFTLFFBQVE7QUFDN0IsU0FBSyxFQUFnQixLQUFLO0FBQzFCLFdBQU8sRUFBYyxNQUFNO0lBQzNCO0dBQ0Q7QUFDRCxVQUFRO0FBQ1AsTUFBRyxFQUFLLElBQUk7S0FDVCxNQUFNLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBRSxZQUFZLENBQUUsQ0FBRSxDQUN2QztFQUNELENBQUUsQ0FBQTtDQUNILENBQUE7O0FBRUQsSUFBTSxJQUFJLEdBQU8sU0FBWCxJQUFJLEdBQWE7QUFDdEIsTUFBSyxFQUFFLENBQUE7O0FBRVAsc0JBQXFCLENBQUUsSUFBSSxDQUFFLENBQUE7Q0FDN0IsQ0FBQTs7QUFFRCxJQUFJLEVBQUUsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJsZXQgYmVhdCA9IDYwZTMgLyAxNDBcblxuY29uc3QgcHJvZ3Jlc3MgPSAoKSA9PlxuXHQoIG5ldyBEYXRlKCkgJSBiZWF0ICkgLyBiZWF0XG5cbmNvbnN0IGNvbG91ciAgID0gZnJhY3Rpb24gPT4ge1xuXHRjb25zdCBiaXR0ZW4gPSBNYXRoLnJvdW5kKCBmcmFjdGlvbiAqIDI1NSApLnRvU3RyaW5nKCAxNiApXG5cblx0cmV0dXJuICcjJyArIGJpdHRlbiArIGJpdHRlbiArIGJpdHRlblxufSBcblxubGV0IHN0YXRlcyAgPSB7XG5cdDAgOiB7XG5cdFx0Y2hpbGRyZW4gOiAnSE0nLFxuXHRcdGF0dHJzOiB7XG5cdFx0XHRzdHlsZSA6IHtcblx0XHRcdFx0J2NvbG9yJyAgICAgOiAnd2hpdGUnLFxuXHRcdFx0XHQnZGlzcGxheScgICA6ICdpbmxpbmUnLFxuXHRcdFx0XHQnZm9udC1zaXplJyA6ICczNjBweCdcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdDEgOiB7XG5cdFx0Y2hpbGRyZW4gOiAnVFpTQ0gnLFxuXHRcdGF0dHJzIDoge1xuXHRcdFx0c3R5bGUgOiB7XG5cdFx0XHRcdCdjb2xvcicgICAgIDogJ2JsYWNrJyxcblx0XHRcdFx0J2Rpc3BsYXknICAgOiAnaW5saW5lJyxcblx0XHRcdFx0J2ZvbnQtc2l6ZScgOiAnMTQwcHgnXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmNvbnN0IGJvZHkgPSBjaXRvLnZkb20uY3JlYXRlKCB7XG5cdHRhZyA6ICdib2R5J1xufSApXG5cbmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQoIGJvZHkuZG9tLCBkb2N1bWVudC5ib2R5IClcblxuY29uc3QgcHVsc2UgICAgPSAoKSA9PiB7XG5cdGNvbnN0IGJlYXRGcmFjdGlvbiA9IHByb2dyZXNzKClcblxuXG5cdGNpdG8udmRvbS51cGRhdGUoIGJvZHksIHtcblx0XHR0YWcgICA6ICdib2R5Jyxcblx0XHRhdHRycyA6IHtcblx0XHRcdHN0eWxlIDoge1xuXHRcdFx0XHQnYmFja2dyb3VuZC1jb2xvcicgOiBjb2xvdXIoIGJlYXRGcmFjdGlvbiApLFxuXHRcdFx0XHQnZm9udC1mYW1pbHknICAgICAgOiAnbW9ub3NwYWNlJyxcblx0XHRcdFx0J2xpbmUtaGVpZ2h0JyAgICAgIDogJzAnLFxuXHRcdFx0XHQncG9zaXRpb24nICAgICAgICAgOiAnZml4ZWQnLFxuXHRcdFx0XHQndGV4dC1hbGlnbicgICAgICAgOiAnY2VudGVyJyxcblx0XHRcdFx0J3RvcCcgICAgICAgICAgICAgIDogJzUwJScsXG5cdFx0XHRcdCd3aWR0aCcgICAgICAgICAgICA6ICcxMDAlJ1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y2hpbGRyZW4gOiB7XG5cdFx0XHR0YWcgICA6ICdoMScsXG5cdFx0XHQuLi5zdGF0ZXNbIE1hdGgucm91bmQoIGJlYXRGcmFjdGlvbiApIF1cblx0XHR9XG5cdH0gKVxufVxuXG5jb25zdCBsb29wICAgICA9ICgpID0+IHtcblx0cHVsc2UoKVxuXG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZSggbG9vcCApXG59XG5cbmxvb3AoKSJdfQ==
