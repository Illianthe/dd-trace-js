'use strict'

describe('SpanContext', () => {
  let SpanContext

  beforeEach(() => {
    SpanContext = require('../../src/opentracing/span_context')
  })

  it('should instantiate with the given properties', () => {
    const props = {
      traceId: '123',
      spanId: '456',
      parentId: '789',
      name: 'test',
      children: ['span'],
      isFinished: true,
      tags: {},
      metrics: {},
      sampled: false,
      sampling: { priority: 2 },
      baggageItems: { foo: 'bar' },
      trace: {
        started: ['span1', 'span2'],
        finished: ['span1']
      }
    }
    const spanContext = new SpanContext(props)

    expect(spanContext).to.deep.equal(props)
  })

  it('should have the correct default values', () => {
    const expected = {
      traceId: '123',
      spanId: '456',
      parentId: null,
      name: undefined,
      children: [],
      isFinished: false,
      tags: {},
      metrics: {},
      sampled: true,
      sampling: {},
      baggageItems: {},
      trace: {
        started: [],
        finished: []
      }
    }

    const spanContext = new SpanContext({
      traceId: expected.traceId,
      spanId: expected.spanId
    })

    expect(spanContext).to.deep.equal(expected)
  })
})
