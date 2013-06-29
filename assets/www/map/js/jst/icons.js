/*
 * Copyright (c) 2013, IT Services, Stockholm University
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * Neither the name of Stockholm University nor the names of its contributors
 * may be used to endorse or promote products derived from this software
 * without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

define([
  'underscore'
], function (_) {
  if (!("JST" in window) || "JST" === undefined) {
  window.JST = {};
}

JST['map/icons/default'] = {
  url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZ' +
      'VJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6c' +
      'mVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuM' +
      'C1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3L' +
      'nczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09I' +
      'mh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5c' +
      'GUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lb' +
      'nRJRD0ieG1wLmRpZDpFMzlCNkI2RDQ0QzRFMjExQTk1QjlFMzY5REE3MzdCQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDMTJBR' +
      'kE4RUM0NEExMUUyOUU5OUJEN0ExOEREQ0MzNyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDMTJBRkE4REM0NEExMUUyOUU5OUJEN' +
      '0ExOEREQ0MzNyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc' +
      '3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFMzlCNkI2RDQ0QzRFMjExQTk1QjlFMzY5REE3MzdCQiIgc3RSZWY6ZG9jdW1lbnRJRD0ie' +
      'G1wLmRpZDpFMzlCNkI2RDQ0QzRFMjExQTk1QjlFMzY5REE3MzdCQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6e' +
      'G1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpvkSAIAAAKFSURBVHjaXFNLaxNRFL4zmcxMMsYktiW1NFUa8FWCdKdSUFFQkOKj4KL+g' +
      'Lpw5cKFG3HjQsGVC/0DxU0RqYIb8VV8gFC0xFZpizZBG5uYxHSSeWWu35lJcNKBb+Zwz/d999xzzwicc7bl2QHEgRjQSQpAHagBf4JkI' +
      'WAgAbvbYpNbuspbdtQjhcINQdYMhErb5DvgBA1CwF4g7FbXIvrc3fPm4uxxwTGHKcklZVXZP/5CG7v6SEwMNbFkA1+BFhlQeRlgm51/P' +
      '1CbnrwVatYORntHWFhNeqXZRoU1SjnWisQ/xSenr4fTh35ieRNYIYMEGbjVvFy+f+SByqRsLDXKmNWAsuEfLoyTyFFWL84zgzkLPZffT' +
      'omJtEUGIl60jaG/uXNBalaysV4UU1tmrLKE74oPL15mlCMOcUlDWjKIoWFRY3H2tJYcYKyxBhSw+2+csOyDYlpDjjjgniINaanznLu2h' +
      'oOmJbWF0v+itSg95HZfroCmWy6T5O3ovz1EGjTP8AyY10cuMg6x2KS7+H/7rDMNrp+jmKuiryERaBYPOSVTrvOWjmahChkshfvfrrjFi' +
      'ENcExrSkkHdEtRmzsp8NnXHJwfFQROAOMS1oSEtGVRjEck291168iGv6ExHqXJ75mTWHSNHHOKShrRkUMNpNk+OX/z4TDz38PWSqtsl7' +
      'GZxmlMfiGmNcsQhruAPUi04ypnct9XBe7dvTuyqvjox1l9J9WumRsl1XdHn1pPFH4mjz69cuzEzsme4QEPUGeXgzzS4Ua7snHn8NDv/7' +
      'uUBU6+mKKFoieLo4WNfJs6eWejrSf7CUmHrzxR8aLSjhmn32Y4je5MsSZaqhDcQ0mxXg+R/AgwACMZITo4dvV0AAAAASUVORK5CYII=',
  size: new google.maps.Size(16, 16),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(8, 8)
};

JST['map/icons/current_position'] = {
  url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanV' +
  'NnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/r' +
  'XXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAc' +
  'B0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5AN' +
  'gtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmk' +
  'AuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQL' +
  'UAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESW' +
  'K5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZk' +
  'mScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj' +
  '1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT' +
  '3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgU' +
  'XACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m' +
  '5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUY' +
  'eoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5' +
  'lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpF' +
  'GgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZV' +
  'xrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+h' +
  'x9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTb' +
  'mmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7' +
  'Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnV' +
  'Ob00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0' +
  '+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPz' +
  'rbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU' +
  '85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqB' +
  'aMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5m' +
  'Z2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sj' +
  'xxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4' +
  'dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G' +
  '7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg' +
  '1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ' +
  '19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L' +
  '158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDY' +
  'brnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH' +
  '8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfdBQ4HKTlUR1' +
  'x0AAABvUlEQVQozzWSvWpUURSFv33OuXecMUpGwyRjhjgiDP6hIBqbxBQBGxsL64hvIPgKgo2lonkAiQ9gZZCQzsIqRRLBJuOgzk9QxIl37r' +
  'nnbIuZrHqx189ewgTlGz0TslhRpKFCHSgkcgCxt/FlLnsoQulqFwGo3Bk4P/Ar0dk1PWGWceYCShAfd8SHbTmK675d3weQkzf7Jv9d3A8l90' +
  'JnSy1mEjBAVPAB+RORH9mmDOOT+rPqruXU01pw9rnOlxflURl9nGIHiv6KkIBUBdNILmovxOHW0ZZRI7eYSu5RS4lLjnbDE1qWsQyQgL2dIL' +
  'N2FZVzDqGhKWAi9p1noWWxnwqiRlCQVJCmgbP2iv4sFtxxS6gS9wpkL47JKHjFXHKYmmFcDziUjnhF/dgzjC/jFXvZkCw5NAcOw67k2jYS9L' +
  'MMiw+SRaQEUlbMNLhlR/ogxdQs4f0I/VZ8RPS7K03bftYtXmpn1LTnyy1zPUXmBTNj0CPIX/+jePt304b4pvWqmgnA1OrAZfv5ip5xazKX3O' +
  'W0NFECh2FHO8W2GcV135k87jhzZbFv/CBUMNJQSx2lINcDsdrb+DqZxrUu/wFRDMdd0v6o6AAAAABJRU5ErkJggg==',
  size: new google.maps.Size(12, 12),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(6, 6)
};

JST['map/icons/parking'] = {
  url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAwCAYAAACWhbMrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJl' +
      'YWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cm' +
      'VTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUu' +
      'MC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3' +
      'd3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1w' +
      'TU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLj' +
      'Avc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFs' +
      'RG9jdW1lbnRJRD0ieG1wLmRpZDozQTE0QjJENDgwQzNFMjExQjQ1QThBRTAyNTI0NDAzNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLm' +
      'RpZDpBRkQ4Nzg5QkMzQTgxMUUyODVFMUNDRUUzQkI5NzU1OSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBRkQ4Nzg5QUMzQTgx' +
      'MUUyODVFMUNDRUUzQkI5NzU1OSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RG' +
      'VyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2QTFBRTFCMUEzQzNFMjExQjQ1QThBRTAyNTI0NDAzNyIgc3RSZWY6' +
      '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',
  size: new google.maps.Size(37, 48),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(18, 48)
};

JST['map/icons/handicap_parking'] = {
  url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAwCAYAAACWhbMrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWF' +
      'nZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2Voa' +
      'Uh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3J' +
      'lIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwO' +
      'i8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM' +
      '6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhc' +
      'C8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWd' +
      'pbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozQTE0QjJENDgwQzNFMjExQjQ1QThBRTAyNTI0NDAzNyIgeG1wTU06RG9jdW1lbnRJRD0ie' +
      'G1wLmRpZDo3MkI0RkQwNkM0NDQxMUUyOTBGRkVEMkU4ODVCMjBGRCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3MkI0RkQwNUM' +
      '0NDQxMUUyOTBGRkVEMkU4ODVCMjBGRCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wT' +
      'U06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFMjlCNkI2RDQ0QzRFMjExQTk1QjlFMzY5REE3MzdCQiIgc3R' +
      'SZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozQTE0QjJENDgwQzNFMjExQjQ1QThBRTAyNTI0NDAzNyIvPiA8L3JkZjpEZXNjcmlwdGlvb' +
      'j4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pn7TYfEAAAdRSURBVHjavJh/bBRFFMff7t61gqVtsKd' +
      'FbQVBqCih8lOxhApCMCZA/cNESwIGQ4QQLBgNiQkiovJDBIEE/pBI5YeGf1rQBoG0YihVUbGA0BbQtgeFSon06tH27ro3vjezu7d3t' +
      '3u93lEnnc7u7ezMZ7/vzZsfEjz8DFBiV2sg3iTlTKGXXsQ8GnMuZpdWujG3aeVFzBXY7o8x2rHsV4oXChugTldhLsK77NADKboyY+a' +
      'bVvxXhnk99uGOB0qOQ5UMzJvxqh7zEpDkbMz4poLZgT85RCk7I+7xOdWj+vQeSJepHWqvtz7lXoBm4/+/sOGVmAcYnSspWGJWUgEcq' +
      'aJUIu758xQTLP5A7YDULNq1Tw57oGeXYSNb8UqhP5Blfim+3lBB5CjzBU1ZDZVBLEFFpdi32H4J3uyIGwpf2KypIwB0U/EvVkKmQZc' +
      'UPmX2K6b5FBMwQVUD6sFqWslUbCC4HZ8Pw4pv9QqFQO8KIBOI4jRB6erIISc3O7vu5LxEKFlTjGAoq3LoGmAl9udhV0+ttR19WGE2w' +
      'hwRyjg1GGe4SgRgqBRqJkwprcjPy4EtbxeHKdh07W9Y8eEuaL/djmABXckXEOy7KKUQaDB2+iUH4jC6o0YCCXPNmz4O8kflQvu/nbB' +
      '137Gw79SLzEFpUDjxcWi6fguaWtpg6EMuKJz0BGSm3wtFSz4IfUsQ9mP/jyHYPyYo/vXrEMjFgfTRFBo5Yb5DQGVblhsYjwzJghWbD' +
      'tiOptLD1bBmZxlkpg2A26d2wbznJ4tRqhoKD4YgW4flUg2KA+WiEosFRORQVjSWkIlIIXPKz8uNGXemTciDNUuKYOzIHH5fW98s2td' +
      '9j48LtljKnbqeuU+6HZqPrEQARagUCRQdsWsb3OH39e6YUIUIRZkSmfK11Z+L9ikpxkhVUC2MY1AiQU6BghA3UE6XMFuq8CkboLCOJ' +
      'uZZ+FR4ne93r4L3d5Wj+cqjpyIKFSo6u+oTucfXhs4/BJVSpiG1y3BoY3qI/eXUGQF9tv8YJJQkbUKh/phDAMqqCxWb5sBIPT0qOEY' +
      'FROuUOWggvPfGPH4dpQQmgj7xaz03mSUV70brm0NRYJVnyvjj+HAgOS4gc3qzeJbl7+R7zy1aD3sOVdvLZcwaBkM+QY0In8tiAwx9M' +
      'Iv7UqRikSOyT2Y0+iYOZYSM5nOF/MjebNTxF2tfh8Yjn/AhbvU8YSp9luBuJLvI0dOMuSwGEDm2rkZ7R2dUnS3vvMp9qKnlFg+kdN0' +
      '3uQy1MihOdeFVmqC1foUU0qcUijEERVE9LIDq5psgPqJoxbY+mlDSVesi7/LiRZr2xHL46wBFJdv4aCq0MB85NUET8NlL7kQcSwOTP' +
      'aRUI19z26i0YE4BL8urznAgu2R2dBoIFAbsR51d3OJgjbK267APlNpIK/2mOiz+9Ba/yOQL5xYk4vkNNAFVYV4UKwREOjeZipzZasR' +
      'lpA2EkvmzDF+k1CfFAI47cA4iKJWmRqsaZAYCy0wPB7Cb7yiRT+lAfQRTiUfm+zLGjhvr6kgH1lYAcwvH9SnCm/2vd1Nq63rkYA3lr' +
      'TJfPwPbYV7JmtOhE2d4SY3GE7X1FSmNUPPCj8B01ayYtIsdYpoWW6EKzLVWVCS7vn4yB1C71YPZXGTip15ezVWj/MNv9TGUCtayiwc' +
      'rxBgcjvtCxz20jirAddRJqwmZfOr3g2u5Y+vLFQoROiyBksl0E+kTcXxRXduKqYGp7MLX1QJq2EwOxS4dBmnM/O0Y5pdZLe4IrGzr8' +
      'l5NSLA86sc7zYjF3k52ft/SUMgaOl1AXa4A6clXUnD5gHstebzdnENqkNObpxm+bvqlnisYK8DamQ33gJPZH1/5Q1CPFPJ1OfvzqPh' +
      'hzHwXqoVg0gjo78TYFVRpCqrUFn7AoW+p9XpUgQWn4gun+xnoNPUTCRQafbRLNdc/v7cVf0QJ2YF+IjrA22dqq/VRkL6riHzt3N4ud' +
      'ra0GJ/TGPfcJRoPb48Fi1GILr5ttz6f0oak3TedK92NDT2Kl59i9iYI4+Xv83aCu7llCEj12ywY+AGHBLiP7311MXYB7lQljCEwRxw' +
      'z8rNOu0S+clgcLfJpzG+cU9FeT4NiV44kfuZpDbkwo2BI57HhI0dN8jEntLU0wk91rS/dSXkAJ3nmERMECz9A48dBfgOMNVb2/cwzp' +
      'rue3ePJcHa1DE7xw6j7FUiXvLfu67z4M3bu4ad2OoRuqh6fyHQd9IOdTzkSUcic8vJGHx0/6emi7Oxs6O7sPt16o+V6c83epNqUkx1' +
      'OkiQ1y7JMJd2cq6mpSXqIJg0VCAQae3p6gLKqqg13I24kA8W3Hk6n45rP1612d3cjWKAu5gayn6H0/Zi8aeMGv9frvXnH61WdDqXO9' +
      'CxhMEeSSnEwVKmlo6Oja+OGj33ahwat17H9CyWF9tqg9AQCN9B0HpPyLBnzJa1UZWVlan3dhZvpg9K7NShmgmb/NxRXZMaMGb6qqqq' +
      'PsrKy/BqEOSeU/hNgAF0RPAIuT/2KAAAAAElFTkSuQmCC',
  size: new google.maps.Size(37, 47),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(18, 47)
};

JST['map/icons/entrance'] = {
  url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAvCAYAAABkBQNlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJl' +
      'YWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cm' +
      'VTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUu' +
      'MC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3' +
      'd3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1w' +
      'TU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLj' +
      'Avc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFs' +
      'RG9jdW1lbnRJRD0ieG1wLmRpZDozNzE0QjJENDgwQzNFMjExQjQ1QThBRTAyNTI0NDAzNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLm' +
      'RpZDpEM0Y5ODEzOEMzQTgxMUUyOUQ1RkM3NDRFMjU3MEFEQSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEM0Y5ODEzN0MzQTgx' +
      'MUUyOUQ1RkM3NDRFMjU3MEFEQSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RG' +
      'VyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2RDFBRTFCMUEzQzNFMjExQjQ1QThBRTAyNTI0NDAzNyIgc3RSZWY6' +
      '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',
  size: new google.maps.Size(37, 47),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(18, 47)
};
});
