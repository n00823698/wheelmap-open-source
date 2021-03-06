require 'spec_helper'

describe ApplicationController do
  # if this test fails, check wether you need the rack_hotfix.rb still
  it "should include the rack_hotfix.rb initializer before rack 1.3.0" do
    if Rack.release.to_f <= 1.2
      Rack::Utils::hotfixed.should be_true
    end
  end

  it "should not include the rack_hotfix.rb initializer after rack 1.3.0" do
    if Rack.release.to_f >= 1.3
      expect { Rack::Utils.hotfixed }.to raise_error
    end
  end
end